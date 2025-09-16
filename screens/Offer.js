import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Linking, ActivityIndicator, ScrollView, Platform, Dimensions, ToastAndroid,
  BackHandler
} from 'react-native';
import { IAP } from '../utils';
import { Button } from 'react-native-elements';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const DEVICE = Platform.isPad ? 'TABLET' : 'PHONE';

var SEARCHADS_LOG_URL = 'https://searchads.stampidentifierai.com/api/vcxHUI16aA7cznkv6z/logSearchAds';

const width = Dimensions.get('window').width;

const POLICY_URL = 'https://stampidentifierai.com/privacy';
const TERMS_URL = 'https://stampidentifierai.com/terms';

var IAP_URL = 'https://analytics.stampidentifierai.com/logging';

const appId = Platform.select({
  ios: 'STAMP_MINHDUC com.ducdm.stampscanner',
  android: 'STAMP_MAGICDEV - packageName: com.magicdev.stampsnap',
});

const weekIAPPack = Platform.select({
  ios: 'WEEKLY TRIAL v1.0',
  android: 'WEEKLY TRIAL v2.0',
});

const Offer = ({ navigation, route }) => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isPurchased, setPurchased] = useState(false);
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
      // AsyncStorage.clear().then(() => console.log("clear dataa"));
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
      const products = await IAP.getFreetrialIAPItems();
      console.log("products:", products);
      if (products.length > 0) {
        setProducts(products);
        setPurchased(purchased);
      } else {
        if (Platform.OS == 'android') ToastAndroid.show('Cannot load in-app purchase!', ToastAndroid.LONG);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: 'center' }}>
          <ImageBackground source={require('../assets/onboard/onboard1.png')} style={{ width: 200, height: 200, marginTop: 50 }} imageStyle={{ borderRadius: 8 }} />
          <LottieView source={require('../assets/scan.json')} autoPlay loop style={{ alignSelf: 'center', position: 'absolute', top: 100, width: 160, height: 100 }} />
        </View>

        <View style={{ flex: 1, marginTop: -16, borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: '#FFF' }}>
          <Text style={{ marginTop: 32, color: '#004D40', alignSelf: 'center', fontSize: 28, fontWeight: '900' }}>GET FULL ACCESS</Text>
          <Text style={{ marginTop: 8, alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>WITH STAMP IDENTIFIER</Text>
          <View style={{ width: width / 3 * 2, alignSelf: 'center', margin: 16, marginTop: 32 }}>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ No popup ads and banners</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Unlimited collection features</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Stamp data updated weekly with over 1M stamps</Text>
            <Text style={{ fontSize: 10, textAlign: 'justify' }}>✅ Estimated value of stamps on the market</Text>
          </View>

          <View style={{ marginTop: 50 }}>
            {Platform.OS == 'android' && products.length > 0 && products[0].subscriptionOfferDetails[0].pricingPhases.pricingPhaseList.length == 2 && <Text style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Start your 3-days free trial</Text>}
            {Platform.OS == 'android' && products.length > 0 && products[0].subscriptionOfferDetails[0].pricingPhases.pricingPhaseList.length == 2 && <Text style={{ fontWeight: '500', alignSelf: 'center' }}>{"Then " + products[0].subscriptionOfferDetails[0].pricingPhases.pricingPhaseList[1].formattedPrice + "/week, Cancel anytime"}</Text>}
            {Platform.OS == 'android' && products.length > 0 && products[0].subscriptionOfferDetails[0].pricingPhases.pricingPhaseList.length == 1 && <Text style={{ fontWeight: '500', alignSelf: 'center' }}>{"Only " + products[0].subscriptionOfferDetails[0].pricingPhases.pricingPhaseList[0].formattedPrice + "/week, Cancel anytime"}</Text>}

            {Platform.OS == 'ios' && products.length > 0 && products[0].introductoryPriceNumberOfPeriodsIOS && <Text style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Start your 3-days free trial</Text>}
            {Platform.OS == 'ios' && products.length > 0 && products[0].localizedPrice && <Text style={{ fontWeight: '500', alignSelf: 'center' }}>{"Then " + products[0].localizedPrice + "/week, Cancel anytime"}</Text>}

            {!isPurchased && <TouchableOpacity
              style={styles.continue}
              onPress={async () => {
                console.log("Continue");
                if (products && products.length > 0 && !loading) {
                  setLoading(true);
                  if (Platform.OS == 'android') {
                    var offerToken = products[0].subscriptionOfferDetails[0].offerToken || null;
                    console.log("offer token =", offerToken);
                    await IAP.subscribe(products[0].productId, offerToken);
                  } else {
                    console.log("Vao day, charge ios");
                    try {
                      console.log(">>> products[0].productId = ", products[0].productId);
                      await IAP.subscribe(products[0].productId, null);
                    } catch (err) {
                      console.log("Loi khi charge", err);
                    }
                  }
                  await sleep(1000);
                  setLoading(false);
                  const purchased = await IAP.isPurchased();
                  if (purchased) {
                    console.log("da charge, dang gui");
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
                          var packData = { iapPack: products[0].productId };
                          var searchAdsData = { ...attrJSON, ...packData };
                          if (searchAdsData.attribution == true) installReferrer = 'apple_search_ads'
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
                    try {
                      var lastType = "LET_ME_TRY";
                      await axios({
                        method: 'post',
                        url: IAP_URL,
                        data: {
                          appId,
                          iapPack: weekIAPPack + ", TYPE: " + lastType + ', DEVICE: ' + DEVICE + ', SOURCE: ' + installReferrer
                        }
                      });
                    } catch (err) {
                      console.log(err);
                      alert(err + "");
                    }
                  }
                  setPurchased(purchased);
                  console.log("purchased =", purchased);
                  if (purchased == true) {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'StampId' }]
                    });
                  }
                }
              }}
              activeOpacity={1}
            >
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>START NOW</Text>
            </TouchableOpacity>}
            <View style={{ alignSelf: 'center', marginBottom: 10, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{ margin: 5 }} onPress={() => Linking.openURL(POLICY_URL)}>
                <Text style={{ fontWeight: '500', fontSize: 12, textDecorationLine: 'underline' }}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5 }} onPress={() => Linking.openURL(TERMS_URL)}>
                <Text style={{ fontWeight: '500', fontSize: 12, textDecorationLine: 'underline' }}>Terms of use</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5 }}
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
                <Text style={{ fontWeight: '500', fontSize: 12, textDecorationLine: 'underline' }}>Restore</Text>
              </TouchableOpacity>
            </View>
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
    alignSelf: 'center', width: Platform.isPad ? '75%' : null, marginTop: 8, marginLeft: 20, marginRight: 20, borderRadius: 16, padding: 4
  },
  continue: {
    width: width - 32,
    backgroundColor: '#00A362', borderRadius: 16, height: 50, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1,
    margin: 16,
    borderColor: '#37D9BE',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  }
});

export default Offer
