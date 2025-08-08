import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, Image, ImageBackground, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InAppReview from 'react-native-in-app-review';
import { IAP } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Setting({ navigation }) {

  const [bannerError, setBannerError] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setShowLoading(true);
    console.log("start loading...")
    sleep(2000).then(async () => {
      setShowLoading(false);
      showRateDialog();
    })
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      IAP.isPurchased().then(result => {
        console.log("isPurchased =", result);
        setPurchased(result)
      });
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const showRateDialog = () => {
    const isAvailable = InAppReview.isAvailable();

    if (isAvailable) {
      InAppReview.RequestInAppReview()
        .then((hasFlowFinishedSuccessfully) => {
          // when return true in android it means user finished or close review flow
          console.log('InAppReview in android', hasFlowFinishedSuccessfully);

          // 3- another option:
          if (hasFlowFinishedSuccessfully) {
            console.log('rated!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Setting</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor="#1f0d03"
        barStyle="light-content"
      />
      <ScrollView>
        {
          !isPurchased && <TouchableOpacity
            style={{ marginLeft: 16, marginTop: 16, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
            onPress={async () => {
              var lastType = "SETTING IAP BANNER";
              navigation.navigate('Premium', { type: lastType });
            }}
          >
            <ImageBackground source={require('../assets/premium_stamp.png')} style={{ position: 'absolute', bottom: 0, right: 0, width: width - 32, height: Math.round((width - 32) * 510 / 2048) }} imageStyle={{ resizeMode: 'contain' }} />
            <View style={{ width: width - 150, margin: 16 }}>
              <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Upgrade to Premium</Text>
              <Text style={{ fontSize: 10, color: '#FFF' }}>Use the app without limits — no ads, no scan restrictions.</Text>
            </View>
          </TouchableOpacity>
        }

        <View style={styles.settingSubView}>
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: 'bold', color: '#00796B' }}>Manage membership</Text>
            <TouchableOpacity
              style={{ flexDirection: 'row', paddingTop: 8 }}
              onPress={() => {
                if (isPurchased) {
                  alert("You have paid, now you can use all the features of the app without any limitations.")
                } else {
                  navigation.navigate('Premium', { type: "SETTING - CLICK MEMBERSHIP BUTTON" });
                }
              }}
            >
              <Ionicons name="gift-outline" color='#000000' size={20} />
              <View style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>My Premium Service</Text>
                <Text style={{ fontSize: 12 }}>{isPurchased ? "Membership status: PREMIUM" : "Membership status: FREE"}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: 'center', width: '90%', height: 1, backgroundColor: '#CFD8DC' }} />

          <Text style={{ fontWeight: 'bold', color: '#00796B', marginLeft: 16, marginTop: 16 }}>Support</Text>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://www.facebook.com/stamp.value')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="lock-closed-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Contact support</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://stampidentifierai.com/')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="globe-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Website</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://www.facebook.com/stamp.value')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="logo-facebook" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Community and support</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>


          <View style={{ alignSelf: 'center', width: '90%', height: 1, backgroundColor: '#CFD8DC' }} />

          <Text style={{ fontWeight: 'bold', color: '#00796B', marginLeft: 16, marginTop: 16 }}>More apps</Text>
          {Platform.OS == 'android' && <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.magicdev.coinid&referrer=utm_source%3Dstamp_magicdev_app')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="radio-button-off-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>For coin collectors</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>}
          {Platform.OS == 'android' && <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://play.google.com/store/apps/details?id=com.magicdev.identifier&referrer=utm_source%3Dstamp_magicdev_app');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="leaf-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>For nature explorers</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>}

          {Platform.OS == 'ios' && <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://apps.apple.com/app/id6738723607');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="cube-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>For TCG collectors</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>}

          {Platform.OS == 'ios' && <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://apps.apple.com/app/id6723888886');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="game-controller-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>For sandbox player</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>}

          {bannerError || isPurchased ?
            null :
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 8, marginBottom: 8 }}>
              <BannerAd
                size={BannerAdSize.MEDIUM_RECTANGLE}
                unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                  ios: 'ca-app-pub-1354543839348242/9312658828',
                  android: 'ca-app-pub-9597010572153445/4900058528',
                })}
                onAdFailedToLoad={(error) => {
                  console.log(error);
                  setBannerError(true);
                }}
              />
            </View>
          }

          <View style={{ alignSelf: 'center', width: '90%', height: 1, backgroundColor: '#CFD8DC' }} />

          <Text style={{ fontWeight: 'bold', color: '#00796B', marginLeft: 16, marginTop: 16 }}>Legal</Text>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://stampidentifierai.com/privacy')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="lock-closed-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Privacy policy</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://stampidentifierai.com/terms');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="document-text-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Terms of use</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://stampidentifierai.com/disclaimer');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="book-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Disclaimer</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      {!isPurchased && isShowLoading && <View style={{ width: width, height: height, position: 'absolute', top: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
          <LottieView source={require('../assets/loadding.json')} autoPlay loop style={{ width: '200%', height: '200%' }} />
        </View>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  moreItem: {
    flexDirection: 'row', padding: 15, justifyContent: 'space-between',
  },
  settingSubView: {
    margin: 10,
    marginTop: 16,
    alignSelf: 'center', width: width - 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }
});
