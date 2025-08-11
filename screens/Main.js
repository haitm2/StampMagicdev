
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArticleGetter, IAP } from '../utils';
import TypewriterText from '../components/TypeWriterText';
import InAppReview from 'react-native-in-app-review';
import { AdEventType, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MAX_SCAN_PER_DAY = 3;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Main({ navigation, route }) {
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const [isSmallAds, setSmallAds] = useState(false);

  const insets = useSafeAreaInsets();

  const getTodayString = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // tháng bắt đầu từ 0
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const checkDailyScanLimit = async () => {
    try {
      console.log("checkDailyScanLimit...");
      const today = getTodayString();
      const raw = await AsyncStorage.getItem('dailyScan');
      console.log(">>>>>>>>>>>> raw", raw);
      if (!raw) return true;

      const data = JSON.parse(raw);
      if (data.date === today && data.count >= MAX_SCAN_PER_DAY) {
        return false
      } else {
        return true;
      }
    } catch (e) {
      console.error('Lỗi kiểm tra scan limit', e);
      return true;
    }
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  useEffect(() => {
    setShowLoading(true);
    console.log("start loading...")
    sleep(1000).then(async () => {
      setShowLoading(false);
      showRateDialog();
    })
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>STAMP IDENTIFIER</Text>
        </View>
      )
    });
  }, [navigation]);

  const clearHistory = async () => {
    const keys = await AsyncStorage.getAllKeys();
    for (const key of keys) {
      console.log("key:", key);
      if (key.startsWith('history_') || key.startsWith('image_')) {
        await AsyncStorage.removeItem(key);
      }
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      // AsyncStorage.clear().then(() => console.log("clear dataa"));
      IAP.isPurchased().then(result => {
        console.log(">>>>> isPurchased =", result);
        setPurchased(result);
      });

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  useEffect(() => {
    IAP.isPurchased().then(async (result) => {
      if (result == false) {
        await sleep(1000);
        var lastType = "HOME IAP POPUP";
        navigation.navigate('Premium', { type: lastType });
      }
    });
    // AsyncStorage.clear();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#1f0d03"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../assets/stampwpp.jpg')} style={styles.topView} imageStyle={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
          <View style={{ marginTop: insets.top + 60 }}>
            {bannerError || isPurchased || Platform.OS == 'ios' ?
              <View style={{ marginBottom: 8, alignItems: 'center' }}>
                <ImageBackground source={require('../assets/img_flag.webp')} style={{ width: 150, height: 150 }} imageStyle={{ resizeMode: 'contain' }} />
                <View style={{ width: width - 32, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 20, margin: 4, marginTop: 16 }}>Know what's in your pocket</Text>
                  <Text style={{ textAlign: 'center', fontSize: 14, color: '#FFF' }}>Tap here to recorgize stamps</Text>
                </View>
              </View> :
              <View style={{ alignSelf: 'center', alignItems: 'center', marginBottom: 16 }}>
                <BannerAd
                  size={isSmallAds ? BannerAdSize.ANCHORED_ADAPTIVE_BANNER : BannerAdSize.MEDIUM_RECTANGLE}
                  unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                    ios: 'ca-app-pub-1354543839348242/7313197350',
                    android: 'ca-app-pub-9597010572153445/9250595016',
                  })}
                  style={{ alignSelf: 'center' }}
                  onAdFailedToLoad={(error) => {
                    console.log(error);
                    setBannerError(true);
                  }} />
                {!isSmallAds && <TouchableOpacity
                  style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 4, marginTop: -32, borderRadius: 4 }}
                  onPress={() => setSmallAds(true)}
                >
                  <Text style={{ color: '#FFF', fontSize: 10 }}>  minimize ads ✖  </Text>
                </TouchableOpacity>}
                {isSmallAds && <View style={{ flexDirection: 'row', marginTop: 8 }}>
                  <ImageBackground source={require('../assets/img_flag.webp')} style={{ width: 100, height: 100 }} imageStyle={{ resizeMode: 'contain' }} />
                  <View style={{ width: width - 164, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 16, margin: 4 }}>Know what's in your pocket</Text>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: '#FFF' }}>Tap here to recorgize stamps</Text>
                  </View>
                </View>}
              </View>
            }
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 8, marginBottom: 16 }}>
              <TouchableOpacity
                style={{ width: width / 2 - 24, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}
                onPress={async () => {
                  if (!isPurchased) {
                    setShowLoading(true);
                    console.log("start loading...")
                    await sleep(1000)
                    setShowLoading(false);
                  }
                  navigation.navigate('Search');
                }}
              >
                <ImageBackground style={{ width: 32, height: 32, margin: 8 }} source={require('../assets/ic_search_edt.png')} />
                <Text style={{ fontWeight: 'bold' }}>Search</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 2 - 24, marginLeft: 16, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}
                onPress={async () => {
                  var canScan = await checkDailyScanLimit();
                  if (canScan || isPurchased) {
                    navigation.navigate('Camera');
                  } else {
                    Alert.alert(
                      'Limit today',
                      'You have scanned all ' + MAX_SCAN_PER_DAY + ' times today.Come back tomorrow! Or try to register the Premium package now!',
                      [
                        {
                          text: 'Ok, I\'ll be back tomorrow.',
                        },
                        {
                          text: 'Register the Premium package',
                          onPress: () => {
                            navigation.navigate('Premium', { type: 'HOME SCREEN -> LIMIT TODAY ALERT' });
                          }
                        }
                      ]
                    );
                  }
                }}
              >
                <ImageBackground style={{ width: 32, height: 32, margin: 8 }} source={require('../assets/ic_camera.png')} />
                <Text style={{ fontWeight: 'bold' }}>Identify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground >
        {
          !isPurchased && <TouchableOpacity
            style={{ marginLeft: 16, marginTop: 16, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
            onPress={async () => {
              var lastType = "HOME IAP BANNER";
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

        <TouchableOpacity
          style={{ marginLeft: 16, marginTop: 16, width: width - 32, borderRadius: 16, backgroundColor: '#004D40' }}
          onPress={async () => {
            if (!isPurchased) {
              var scannedMulti = await AsyncStorage.getItem("scannedMulti");
              if (!scannedMulti) {
                setShowLoading(true);
                console.log("start loading...")
                await sleep(1000)
                setShowLoading(false);
                navigation.navigate('ResultMultiple');
              } else {
                navigation.navigate('Premium', { type: 'IDENTIFY MULTIPLE STAMP' });
              }
            } else {
              navigation.navigate('ResultMultiple');
            }
          }}
        >
          <ImageBackground source={require('../assets/multiple_stamps.png')} style={{ width: width - 32, height: 100 }} imageStyle={{ resizeMode: 'contain' }} />
          <View style={{ width: width - 150, margin: 16 }}>
            <Text style={{ fontWeight: 'bold', color: '#FFF' }}>{"🌟 New feature"}</Text>
            <Text style={{ fontSize: 10, color: '#FFF' }}>Identify multiple stamps at once</Text>
          </View>
          <View style={{ position: 'absolute', bottom: 16, right: 16, borderRadius: 8, backgroundColor: '#E0F2F1', padding: 8 }}>
            <Text style={{ fontWeight: '600' }}>  Try now →  </Text>
          </View>
          <LottieView source={require('../assets/shining_stars.json')} autoPlay loop style={{ position: 'absolute', top: 16, left: 16, width: 100, height: 100 }} />
        </TouchableOpacity>

        <View style={{ height: 200 }} />
      </ScrollView >
      <TouchableOpacity
        style={{ position: 'absolute', bottom: insets.bottom + 90, right: 20, flexDirection: 'row' }}
        onPress={async () => {
          try {
            if (!isPurchased) {
              setShowLoading(true);
              console.log("start loading...")
              await sleep(1000)
              setShowLoading(false);
            }
          } catch (err) { }
          navigation.navigate('StampExpert');
        }}
      >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#37D9BE', '#097754']} style={styles.chatbox}>
          <TypewriterText text={'Stamp Expert'} loop={true} speed={200} style={{ fontWeight: 'bold', color: '#FFF', marginLeft: 16, marginRight: 16 }} />
        </LinearGradient>
        <ImageBackground source={require('../assets/chatbot.png')} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
      {
        !isPurchased && isShowLoading && <View style={{ width: width, height: height, position: 'absolute', top: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
            <LottieView source={require('../assets/loadding.json')} autoPlay loop style={{ width: '200%', height: '200%' }} />
          </View>
        </View>
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  topView: {
    alignItems: 'center',
    width: width
  },

  searchbar: {
    margin: 16, backgroundColor: '#000000', flexDirection: 'row', borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888888'
  },
  identifyButton: {
    width: width * 0.4, padding: 12, backgroundColor: '#F76D1F', marginBottom: 16, borderRadius: 24,
    borderWidth: 2,
    borderTopColor: '#f7a577',
    borderLeftColor: '#f7a577',
    borderBottomColor: '#ad4205',
    borderRightColor: '#ad4205',
  },
  certBtn: {
    position: 'absolute', bottom: 18, left: 16, alignItems: 'center', justifyContent: 'center', width: width / 3, padding: 8, backgroundColor: '#1FA586', borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#189777',
    elevation: 3,
  },
  chatbox: {
    borderWidth: 1, borderRadius: 20, marginTop: 24, height: 40, borderColor: '#FFF',
    // paddingLeft: 16,
    borderRadius: 32,
    // paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
