import {
    initConnection,
    getProducts,
    getSubscriptions,
    requestPurchase,
    requestSubscription,
    purchaseErrorListener,
    purchaseUpdatedListener,
    flushFailedPurchasesCachedAsPendingAndroid,
    getPurchaseHistory,
    validateReceiptIos,
    getAvailablePurchases,
    acknowledgePurchaseAndroid
} from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import axios from 'axios';

var isConnected = false;
const productIds = Platform.select({
    ios: [
        'com.ducdm.stampscanner.onetime',
    ],
    android: [
        'com.magicdev.stampsnap.premium',
    ],
});

const subscriptionIds = Platform.select({
    ios: [
        'com.ducdm.stampscanner.weekly'
    ],
    android: [
        'com.magicdev.stampsnap.weekly'
    ],
});

const freetrialSubscriptionIds = Platform.select({
    ios: [
        'com.ducdm.stampscanner.weekly_trial'
    ],
    android: [
        'com.magicdev.stampsnap.weekly_trial'
    ],
});


var products = [];
var subscriptions = [];
var freetrialSubscriptions = [];

var purchaseUpdateSubscription = null;
var purchaseErrorSubscription = null;

export async function connect() {
    if (!isConnected) {
        try {
            console.log(">>>> connecting....");
            await initConnection();
            if (Platform.OS == 'android') await flushFailedPurchasesCachedAsPendingAndroid();

            this.purchaseUpdateSubscription = purchaseUpdatedListener(
                async (purchase) => {
                    // console.log('purchaseUpdatedListener', purchase);
                    const receipt = purchase.transactionReceipt;

                    if (Platform.OS == 'android') {
                        try {
                            await acknowledgePurchaseAndroid({ token: JSON.parse(receipt).purchaseToken });
                        } catch (err) {
                            console.log("acknowledgePurchaseAndroid error:", err);
                        }
                    }

                    await AsyncStorage.setItem("purchased", "ok");
                },
            );

            this.purchaseErrorSubscription = purchaseErrorListener(
                (error) => {
                    console.warn('purchaseErrorListener', error);
                },
            );

            console.log("Getting products");
            products = await getProducts({ skus: productIds });
            console.log("Getting subscriptions");
            subscriptions = await getSubscriptions({ skus: subscriptionIds });
            freetrialSubscriptions = await getSubscriptions({ skus: freetrialSubscriptionIds })

            // console.log(JSON.stringify(products));
            // console.log(JSON.stringify(subscriptions));
            // console.log("FREE TRIAL >>>>>", JSON.stringify(freetrialSubscriptions));
        } catch (err) {
            console.log('ERROR:', err);
        }
    }
}

export async function isPurchased() {
    const value = await AsyncStorage.getItem("purchased");
    if (value == 'ok') {
        return true;
    }
    return false;
    // return true;
}

export async function getIAPItems() {
    var items = [...subscriptions, ...products] || []
    return items;
}

export async function getFreetrialIAPItems() {
    var items = [...freetrialSubscriptions] || []
    return items;
}

export async function purchase(productId) {
    try {
        console.log(">>>>> purchaseproductId", productId);
        await requestPurchase({ skus: [productId] });
    } catch (err) {
        console.log(err);
    }
};

export async function subscribe(sku, offerToken) {
    try {
        console.log(">>>>> subscribe sku", sku);
        await requestSubscription({
            sku,
            ...(offerToken && { subscriptionOffers: [{ sku, offerToken }] }),
        });
    } catch (err) {
        console.log(err);
    }
};

export async function restore() {
    try {
        console.log("Dang restore");
        const purchase = await getAvailablePurchases();
        console.log("Available purchase length:", purchase.length);
        if (Platform.OS == 'android') {
            console.log("vao android");
            if (purchase && purchase.length > 0) {
                console.log("Check purchase da mua nen set purchased=ok");
                await AsyncStorage.setItem("purchased", "ok");
            } else {
                await AsyncStorage.removeItem("purchased");
            }
        } else if (Platform.OS == 'ios') {
            console.log("vao ios");


            if (purchase && purchase.length > 0) {
                const latestPurchase = purchase[purchase.length - 1]; // Assuming the last purchase is the latest subscription
                var isPremiumUser = await verifyReceiptAndCheckValidity(latestPurchase.transactionReceipt, '286af8c31f23439d8d0f9ed9c7273070', __DEV__);
                if (isPremiumUser) {
                    console.log("Day la user vip");
                    await AsyncStorage.setItem("purchased", "ok");
                } else {
                    console.log("Deo phai user vip");
                    await AsyncStorage.removeItem("purchased");
                }
            } else {
                console.log("Chua bao gio tra phi");
                await AsyncStorage.removeItem("purchased");
            }
        }
    } catch (err) {
        console.log("Dit me loi", err);
    }
}

/**
 * Kiểm tra receipt iOS có hợp lệ không (subscription hoặc one-time)
 * 
 * @param {string} receiptBase64 - Chuỗi receipt dạng base64
 * @param {string} sharedSecret - Shared secret từ App Store Connect
 * @param {boolean} isSandbox - true nếu dùng môi trường sandbox, false nếu production
 * @returns {Promise<boolean>} - true nếu receipt hợp lệ, false nếu không
 */
async function verifyReceiptAndCheckValidity(receiptBase64, sharedSecret, isSandbox = true) {
    const url = isSandbox
        ? 'https://sandbox.itunes.apple.com/verifyReceipt'
        : 'https://buy.itunes.apple.com/verifyReceipt';

    const requestBody = {
        'receipt-data': receiptBase64,
        'password': sharedSecret,
        'exclude-old-transactions': true
    };

    try {
        console.log("Bat dau kiem tra");
        const response = await axios.post(url, requestBody, {
            headers: { 'Content-Type': 'application/json' }
        });

        const data = response.data;
        // console.log(JSON.stringify(data));

        if (data.status !== 0) {
            console.error('Receipt verification failed. Status:', data.status);
            return false;
        }

        const receiptItems = data.latest_receipt_info || data.receipt?.in_app || [];
        const now = Date.now();
        console.log("Date.now() =", Date.now());

        for (const item of receiptItems) {
            console.log(item);
            console.log("item.is_trial_period =", item.is_trial_period);
            if (item.is_trial_period == true) {
                return true;
            }

            const cancelled = item.cancellation_date_ms;
            const expires = item.expires_date_ms ? parseInt(item.expires_date_ms, 10) : null;

            console.log("expires && expires > now =", expires && expires > now);
            if (expires && expires > now && !cancelled) {
                console.log("Subscription còn hạn và không bị refund");
                return true;
            }

            if (!expires && !cancelled) {
                console.log("One-time purchase không refund");
                return true;
            }
        }

        return false; // Không còn gói nào hợp lệ

    } catch (error) {
        console.error('Error verifying receipt:', error.message);
        return false;
    }
}

