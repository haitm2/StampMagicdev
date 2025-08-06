import { ActivityIndicator, Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { IAP } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settings } from 'react-native-fbsdk-next';

import AppleAdsAttribution from "@vladikstyle/react-native-apple-ads-attribution";
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { AppOpenAd, TestIds, AdEventType, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const interstitialAdUnitId = __DEV__ ? TestIds.APP_OPEN : Platform.select({
  ios: TestIds.APP_OPEN,
  android: 'ca-app-pub-9597010572153445/4029518924'
});

const appOpenAd = AppOpenAd.createForAdRequest(interstitialAdUnitId);

export default function Splash({ navigation }) {

  const [bannerError, setBannerError] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const insets = useSafeAreaInsets();

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log("Init facebook sdk");
    try {
      Settings.initializeSDK();
    } catch (err) {
      console.log("Init fb sdk fail", err);
    }
  }, []);

  const getAppleAttributionData = async () => {
    console.log("Getting apple ads data");
    try {
      const attribution = await AsyncStorage.getItem("attribution");
      if (!attribution) {
        const adServicesAttributionData = await AppleAdsAttribution.getAdServicesAttributionData();
        console.log("adServicesAttributionData:", adServicesAttributionData);
        await AsyncStorage.setItem("attribution", JSON.stringify(adServicesAttributionData));
      } else {
        console.log("ko co attribution")
      }
    } catch (err) {
      console.log(err);
    }
    console.log("Get apple ads data done");

  }

  const getGooglePlayInstallReferrerInfo = async () => {
    console.log("Get google play referer_info android");
    try {
      const installReferrerInfo = await new Promise((resolve, reject) => {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          if (!error) {
            resolve(info);
          } else {
            reject(error);
          }
        });
      });
      console.log("Install referrer = " + installReferrerInfo.installReferrer);
      await AsyncStorage.setItem('installReferrerInfo', JSON.stringify(installReferrerInfo));
    } catch (error) {
      console.log("Failed to get install referrer info!", error);
    }
  }

  useEffect(() => {
    initData();
  }, [])

  async function initData() {
    // await AsyncStorage.clear();
    await IAP.connect();
    await IAP.restore();
    const result = await IAP.isPurchased();
    setPurchased(result);

    console.log("isPurchased =", result);

    if (result == true) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'StampId' }]
      });
    } else {
      appOpenAd.load();
      if (Platform.OS == 'ios') {
        await getAppleAttributionData();
        await sleep(6000);
      } else if (Platform.OS == 'android') {
        await getGooglePlayInstallReferrerInfo();
        await sleep(6000);
      } else {
        await sleep(7000);
      }
      console.log(">>>>>>>> SHOW OPEN ADS");
      if (result === false) {
        try {
          console.log("Show open ads")
          appOpenAd.show();
        } catch (err) {
          console.log(err)
        }
      }

      const value = await AsyncStorage.getItem('skip');
      if (value) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StampId' }]
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'PolicyConfirm' }],
        });
      }
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground source={require('../assets/splash_bg.jpg')} style={{ width: width, height: height, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          backgroundColor="#1f0d03"
          barStyle="light-content"
        />
        {isPurchased || bannerError ?
          null :
          <View style={{ width: '100%', position: 'absolute', top: 80, alignItems: 'center' }}>
            <BannerAd
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: TestIds.BANNER,
                android: 'ca-app-pub-9597010572153445/9195436884',
              })}
              onAdFailedToLoad={(error) => {
                console.log(error);
                setBannerError(true);
              }}
            />
          </View>
        }
        <ImageBackground source={require('../assets/icon.png')} style={{ width: 100, height: 100, borderRadius: 16 }} imageStyle={{ borderRadius: 16 }} />
        <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 32, marginTop: 16 }}>STAMP IDENTIFIER</Text>
        <Text style={{ color: '#FFF' }}>Find Your Stamps Value</Text>
        <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center', bottom: insets.bottom + 30 }} size={"large"} color={"#FFF"} />
      </ImageBackground>
    </SafeAreaView>
  );
}
