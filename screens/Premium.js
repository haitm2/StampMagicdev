import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet, Text, View, BackHandler, ImageBackground, TouchableOpacity, Linking, ActivityIndicator, ScrollView, Platform, Dimensions, ToastAndroid
} from 'react-native';
import { IAP } from '../utils';
import { Button } from 'react-native-elements';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;

const DEVICE = Platform.isPad ? 'TABLET' : 'PHONE';

const POLICY_URL = 'https://stampidentifierai.com/privacy';
const TERMS_URL = 'https://stampidentifierai.com/terms';

const onetimeIAPPack = Platform.select({
  ios: 'ONETIME v1.0',
  android: 'ONETIME V2.0',
});

const weeklyIAPPack = Platform.select({
  ios: 'WEEKLY v1.0',
  android: 'WEEKLY V2.0',
});

var IAP_URL = 'https://analytics.stampidentifierai.com/logging';

var SEARCHADS_LOG_URL = 'https://searchads.stampidentifierai.com/api/vcxHUI16aA7cznkv6z/logSearchAds';

const appId = Platform.select({
  ios: 'STAMP_MINHDUC com.ducdm.stampscanner',
  android: 'STAMP_MAGICDEV - packageName: com.magicdev.stampsnap',
});

const Premium = ({ navigation, route }) => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isPurchased, setPurchased] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isShowClose, setShowClose] = useState(false);

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  useEffect(() => {
    initIAP();
    delayToShowClose();
  }, [])

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        console.log("Press back");
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const delayToShowClose = async () => {
    await timeout(3000);
    setShowClose(true);
  }

  useFocusEffect(
    React.useCallback(() => {
      IAP.isPurchased().then(result => {
        console.log("isPurchased =", result);
        setPurchased(result);
      });

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const initIAP = async () => {
    const purchased = await IAP.isPurchased();

    if (!purchased) {
      console.log("init iap");
      await IAP.connect();
      const products = await IAP.getIAPItems();
      // console.log("products:", products);
      if (products.length > 0) {
        setSelected(products[0])
        setProducts(products);
        setPurchased(purchased);
      } else {
        if (Platform.OS == 'android') ToastAndroid.show('Cannot load IAP items!', ToastAndroid.LONG);
        await sleep(3000);
        navigation.goBack();
      }
    } else {
      setProducts([]);
      setPurchased(true);
    }

    setLoading(false);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <ImageBackground source={require('../assets/bg_inapp.webp')} style={{ flex: 1, resizeMode: 'cover' }}>
      <ScrollView>
        <View style={{ alignSelf: 'center' }}>
          <ImageBackground source={require('../assets/onboard/onboard1.png')} style={{ width: 200, height: 200, marginTop: 50 }} imageStyle={{ borderRadius: 8 }} />
          <LottieView source={require('../assets/scan.json')} autoPlay loop style={{ alignSelf: 'center', position: 'absolute', top: 100, width: 160, height: 100 }} />
        </View>
        <View style={{ flex: 1, marginTop: -16, borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: '#FFF' }}>
          <Text style={{ marginTop: 24, alignSelf: 'center', fontSize: 24, fontWeight: 'bold' }}>P R E M I U M</Text>
          <View style={{ width: width / 3 * 2, alignSelf: 'center', margin: 16 }}>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ No popup ads and banners</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Unlimited collection features</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Stamp data updated weekly with over 1M stamps</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Estimated value of stamps on the market</Text>
          </View>
          {isPurchased ?
            <Button
              title="You purchased"
              buttonStyle={styles.unlockBtn}
              onPress={() => alert("You purchased!")} /> :
            products.map(product => (
              <Button
                disabled={loading}
                key={product.productId}
                title={
                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={{ fontSize: 14 }}>
                        {products.length == 0 ? '---' : product.productId.includes('week') ? 'Weekly' : 'One time'}
                      </Text>
                      <Text style={{ fontStyle: 'italic', fontSize: 10 }}>
                        {products.length == 0 ? '---' : product.productId.includes('week') ? 'auto-renewing' : 'For a lifetime'}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                      <Text style={{ fontWeight: product.productId === selected.productId ? 'bold' : null, fontSize: 16 }}>
                        {products.length == 0 ? '---' : product.productType === 'inapp' || Platform.OS !== 'android' ? product.localizedPrice : product.subscriptionOfferDetails[0].pricingPhases.pricingPhaseList[0].formattedPrice}
                      </Text>
                      {product.productId.includes('week') && <Text>{" / week"}</Text>}
                    </View>
                    {product.productId === selected.productId && <ImageBackground source={require('../assets/check.png')} style={{ width: 20, height: 20, position: 'absolute', top: -20, right: -20 }} />}
                  </View>
                }
                buttonStyle={[
                  styles.unlockBtn,
                  {
                    borderColor: product.productId === selected.productId ? '#00FF87' : 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 2,
                    backgroundColor: '#FFF',
                    borderRadius: 16
                  }
                ]}
                onPress={() => setSelected(product)}
              />
            ))
          }
          {!isPurchased && <TouchableOpacity
            style={styles.continue}
            onPress={async () => {
              if (products.length > 0 && !loading) {
                setLoading(true);
                // await IAP.purchase(selected);
                if (selected.productType === 'inapp') {
                  await IAP.purchase(selected.productId);
                } else {
                  if (Platform.OS == 'android') {
                    var offerToken = selected.subscriptionOfferDetails[0].offerToken || null;
                    await IAP.subscribe(selected.productId, offerToken);
                  } else {
                    await IAP.subscribe(selected.productId, null);
                  }
                }
                await sleep(1000);
                setLoading(false);
                const purchased = await IAP.isPurchased();
                if (purchased) {
                  console.log("da charge, dang gui");
                  try {
                    var lastType = "UNKNOWN";
                    try {
                      lastType = route.params.type;
                    } catch (err) { }
                    var installReferrer = "";
                    if (Platform.OS == 'android') {
                      try {
                        const googlePlayReferer = await AsyncStorage.getItem("installReferrerInfo");
                        if (googlePlayReferer) {
                          var googlePlayRefererObj = JSON.parse(googlePlayReferer);
                          installReferrer = googlePlayRefererObj.installReferrer;
                        }
                      } catch (err) { }
                      console.log('installReferrer', installReferrer);
                    } else if (Platform.OS == 'ios') {
                      try {
                        const attribution = await AsyncStorage.getItem("attribution");
                        if (attribution) {
                          var attrJSON = JSON.parse(attribution);
                          var packData = { iapPack: selected.productId };
                          var searchAdsData = { ...attrJSON, ...packData };
                          if (searchAdsData.attribution == true) installReferrer = 'apple_search_ads';
                          console.log("searchAdsData", searchAdsData);
                          await axios({
                            method: 'post',
                            url: SEARCHADS_LOG_URL,
                            data: searchAdsData
                          });
                        } else {
                          console.log("ko co search ads data")
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }
                    await axios({
                      method: 'post',
                      url: IAP_URL,
                      data: {
                        appId,
                        iapPack: selected.productId.includes('week') ?
                          weeklyIAPPack + ", TYPE:" + lastType + ', DEVICE: ' + DEVICE + ', SOURCE: ' + installReferrer :
                          onetimeIAPPack + ", TYPE:" + lastType + ', DEVICE: ' + DEVICE + ', SOURCE: ' + installReferrer
                      }
                    });
                  } catch (err) {
                    console.log(err);
                  }
                }
                setPurchased(purchased);
                console.log("purchased =", purchased);
                if (purchased == true) {
                  navigation.goBack();
                }
              }
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>Continue</Text>
          </TouchableOpacity>}
          <View style={{ margin: 16, padding: 8 }}>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>With the weekly plan and the One-time plan you will need to pay immediately, then you will use the app with full access and no ads. You can unsubscribe from these packages at any time</Text>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ margin: 4 }} onPress={() => Linking.openURL(POLICY_URL)}>
              <Text style={{ fontStyle: 'italic', fontSize: 10, textDecorationLine: 'underline' }}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 4 }} onPress={() => Linking.openURL(TERMS_URL)}>
              <Text style={{ fontStyle: 'italic', fontSize: 10, textDecorationLine: 'underline' }}>Terms of use</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 4 }}
              onPress={async () => {
                setLoading(true);
                await IAP.restore()
                await sleep(1000);
                setLoading(false);
                const purchased = await IAP.isPurchased();
                setPurchased(purchased);
                alert("Restore Successful");
              }}
            >
              <Text style={{ fontStyle: 'italic', fontSize: 10, textDecorationLine: 'underline' }}>Restore</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 200 }} />
        </View>
      </ScrollView>
      {(loading || products.length == 0) && !isPurchased && <View style={{ position: 'absolute', width: 50, height: 50, backgroundColor: '#fff', alignSelf: 'center', top: '50%', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#000" />
      </View>}
      {isShowClose && <TouchableOpacity
        style={{ position: 'absolute', top: 40, right: 20, width: 30, height: 30 }}
        onPress={() => navigation.goBack()}
        disabled={loading}
      >
        <Ionicons
          name='close' size={24}
          color='#FFF'
        />
      </TouchableOpacity>}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  step: { alignSelf: 'center', fontSize: 18, justifyContent: 'center', marginTop: 30, fontWeight: 'bold' },
  bonus: { fontSize: 20, margin: 5, color: '#fff' },
  unlockBtn: {
    alignSelf: 'center', marginTop: 16, marginLeft: 16, marginRight: 16, padding: 16
  },
  continue: {
    backgroundColor: '#00A362',
    borderRadius: 8,
    width: width - 32,
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    alignSelf: 'center'
  }
});

export default Premium
