import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { BackHandler, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AES, IAP } from '../utils';
import InAppReview from 'react-native-in-app-review';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import LottieView from 'lottie-react-native';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({
  ios: 'ca-app-pub-1354543839348242/4192209993',
  android: 'ca-app-pub-9597010572153445/5911013595'
});

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);

export default function Result({ route }) {
  const navigation = useNavigation();
  const [stamps, setStamps] = useState([]);
  const [identifying, setIdentifying] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [stampCoord, setStampCoord] = useState(null);
  const insets = useSafeAreaInsets();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Da load xong ad")
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    IAP.isPurchased().then(result => {
      if (result == false) interstitial.load();
    });

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  const getTodayString = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // tháng bắt đầu từ 0
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const updateDailyScanCount = async () => {
    try {
      const today = getTodayString();
      const raw = await AsyncStorage.getItem('dailyScan');
      let data = raw ? JSON.parse(raw) : { date: today, count: 0 };

      if (data.date !== today) {
        // Reset if new day
        data = { date: today, count: 0 };
      }

      data.count += 1;
      await AsyncStorage.setItem('dailyScan', JSON.stringify(data));
    } catch (e) {
      console.error('Lỗi cập nhật scan count', e);
    }
  };


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

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StampId' }]
        });
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  async function detectStamp() {
    setIdentifying(true);
    try {
      const detectBody = new FormData();
      detectBody.append('picture_upload', {
        uri: route.params.image,
        name: 'stamp.jpg',
        type: 'image/jpeg'
      });

      // console.log(JSON.stringify(detectBody));
      const data = await fetch('https://stampsnap.stampidentifierai.com/api/v2/detectStamp', {
        method: 'POST',
        body: detectBody,
      });
      console.log("Detecting....")

      const jsonRsText = await data.text();
      var dataDecrypted = await AES.decrypt(jsonRsText);
      var jsonRs = JSON.parse(dataDecrypted);
      console.log(jsonRs);
      // var jsonRs = [{ "_id": "6434aefd7b417a137f2abfce", "country": "French Southern and Antarctic Lands (TAAF)", "description": "", "faceValue": "30₣ - French franc", "images": ["4621390", "0"], "issuedOn": "1965-05-17", "name": "Emblem ITU, telegraph masts, communications satellite \"Synco", "score": 0.8992, "series": "Centenary of International Telecommunication Union (I.T.U.)", "size": "", "stampId": "242768" }, { "_id": "6434a3947b417a137f2a74a8", "country": "New Caledonia", "description": "", "faceValue": "40F - CFP franc", "images": ["4620056", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the International Telecommunication Union (ITU)", "score": 0.8804, "series": "Airmail", "size": "", "stampId": "232961" }, { "_id": "6434d2497b417a137f2ba36c", "country": "French Polynesia", "description": "", "faceValue": "50F - CFP franc", "images": ["8232088", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the UIT", "score": 0.8748, "series": "", "size": "", "stampId": "272982" }, { "_id": "6434b54c7b417a137f2ae8e2", "country": "Wallis and Futuna", "description": "", "faceValue": "50F - CFP franc", "images": ["4620023", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the International Telecommunication Union (ITU)", "score": 0.8726, "series": "", "size": "", "stampId": "248105" }, { "_id": "6434ac217b417a137f2aacba", "country": "Saint Pierre and Miquelon", "description": "", "faceValue": "40Saint Pierre and Miquelon franc", "images": ["4620027", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the International Telecommunication Union (ITU)", "score": 0.8695, "series": "", "size": "", "stampId": "240308" }, { "_id": "6435116a7b417a137f2d3e9a", "country": "New Hebrides", "description": "", "faceValue": "15New Hebrides goldcentime", "images": ["4620589", "0"], "issuedOn": "1965-05-17", "name": "Emblem of the ITU, Telegraph Poles, Communications Satellite", "score": 0.8637, "series": "Centenary of International Telecommunication Union (I.T.U.)", "size": "", "stampId": "327179" }, { "_id": "643492f47b417a137f2a067e", "country": "French Somaliland (Somali Coast)", "description": "", "faceValue": "95F - French Somaliland franc", "images": ["4620017", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the International Telecommunication Union (ITU)", "score": 0.8629, "series": "", "size": "", "stampId": "218688" }, { "_id": "64348cee7b417a137f29deae", "country": "Comoros", "description": "Poste aerienne-Airmail", "faceValue": "50Fr. - French African CFA franc", "images": ["4619465", "0"], "issuedOn": "1965-05-17", "name": "Centenary of the International Telecommunication Union (ITU)", "score": 0.8482, "series": "", "size": "", "stampId": "213545" }, { "_id": "6435116a7b417a137f2d3e9c", "country": "New Hebrides", "description": "", "faceValue": "60New Hebrides goldcentime", "images": ["4620590", "0"], "issuedOn": "1965-05-17", "name": "Emblem of the ITU, Telegraph Poles, Communications Satellite", "score": 0.8028, "series": "Centenary of International Telecommunication Union (I.T.U.)", "size": "", "stampId": "327180" }];
      setStamps(jsonRs);
      sleep(2000);
      // var jsonRs = [];
      // setStamps(jsonRs);
      if (jsonRs.length == 0) {
        Alert.alert(
          'Stamp not recognized in photo.',
          'Make sure your photo includes the stamp and is clear.',
          [
            {
              text: 'OK',
              onPress: async () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'StampId' }]
                });
              }
            }
          ]
        );
      } else {
        setStampCoord(convertToSquareCoords(jsonRs[0].coords, route.params.width, route.params.height, 100));
        await updateDailyScanCount();
        showRateDialog();
      }
    } catch (err) {
      console.log("error: ", err);
    }
    setIdentifying(false);
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
    detectStamp();
  }, []);

  function convertToImageUrl(code) {
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/f/${prefix}/${suffix}/image.jpg`;
  }

  function convertToSquareCoords(coordStr, imageWidth, imageHeight, squareSize) {
    try {
      console.log('coordStr =', coordStr);
      var temp = coordStr.split(' ');
      var x0 = temp[0];
      var y0 = temp[1];
      var x1 = temp[2];
      var y1 = temp[3];
      const aspectRatio = imageWidth / imageHeight;

      let scale, offsetX = 0, offsetY = 0;

      if (aspectRatio >= 1) {
        // Ảnh rộng hơn cao, scale theo chiều rộng
        scale = squareSize / imageWidth;
        offsetY = (squareSize - imageHeight * scale) / 2;
      } else {
        // Ảnh cao hơn rộng, scale theo chiều cao
        scale = squareSize / imageHeight;
        offsetX = (squareSize - imageWidth * scale) / 2;
      }

      const newX0 = Math.round(x0 * scale + offsetX);
      const newY0 = Math.round(y0 * scale + offsetY);
      const newX1 = Math.round(x1 * scale + offsetX);
      const newY1 = Math.round(y1 * scale + offsetY);

      console.log("x0 =", newX0, ", x1 =", newX1, ", y0 =", newY0, ", y1 =", newY1);
      console.log("x1 - x0 =", newX1 - newX0);
      console.log("y1 - y0 =", newY1 - newY0);

      return {
        x0: newX0,
        y0: newY0,
        x1: newX1,
        y1: newY1
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#303234"
        barStyle="dark-content"
      />

      {identifying && <View style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground style={{ width: width / 2, height: width / 2, alignItems: 'center', justifyContent: 'center' }} source={require('../assets/camera_frame_dark.png')}>
          <ImageBackground style={{ width: width * 0.4, height: width * 0.4, alignItems: 'center', justifyContent: 'center' }} imageStyle={{ resizeMode: 'contain' }} source={{ uri: route.params.image }} >
            <LottieView source={require('../assets/scan.json')} autoPlay loop style={{ width: '100%', height: '100%' }} />
          </ImageBackground>
        </ImageBackground>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500', margin: 16, textAlign: 'center' }}>Identifying stamp, please wait...</Text>
        {bannerError || isPurchased ?
          null :
          <View style={{ width: '100%', alignItems: 'center', marginBottom: 16 }}>
            <BannerAd
              size={BannerAdSize.MEDIUM_RECTANGLE}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: TestIds.BANNER,
                android: 'ca-app-pub-9597010572153445/1603427875',
              })}
              onAdFailedToLoad={(error) => {
                console.log(error);
                setBannerError(true);
              }}
            />
          </View>
        }
      </View>}

      {!identifying && stamps.length > 0 && <ScrollView>
        <ImageBackground style={{ backgroundColor: '#000', borderRadius: 8, alignSelf: 'center', marginTop: insets.top + 16, width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }} imageStyle={{ backgroundColor: '#000', borderRadius: 8, resizeMode: 'contain', borderRadius: 8 }} source={{ uri: route.params.image }}>
          {stampCoord && <View style={{ position: 'absolute', borderWidth: 1, borderColor: 'yellow', top: stampCoord.y0, left: stampCoord.x0, width: stampCoord.x1 - stampCoord.x0, height: stampCoord.y1 - stampCoord.y0 }} />}
        </ImageBackground>
        <TouchableOpacity
          key={stamps[0]._id}
          style={{
            margin: 8, padding: 8, backgroundColor: '#26A69A', borderRadius: 16,
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}
          onPress={async () => {
            if (!isPurchased) {
              setShowLoading(true);
              console.log("start loading...")
              await sleep(2000)
              setShowLoading(false);
              try {
                interstitial.show();
                setLoaded(false);
                interstitial.load();
              } catch {
                interstitial.load();
              }
            }
            navigation.navigate('Detail', { stampId: stamps[0].stampId })
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <ImageBackground style={{ width: 150, height: 150, margin: 8, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} source={require('../assets/laurel.png')} imageStyle={{ resizeMode: 'contain' }}>
              <ImageBackground style={{ width: 100, height: 100, alignSelf: 'center' }} source={{ uri: convertToImageUrl(stamps[0].images[0]) }} imageStyle={{ resizeMode: 'contain' }} />
            </ImageBackground>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ width: width - 220, marginBottom: 16, color: '#FFF', alignSelf: 'center', textAlign: 'center' }}>{"Best matched: " + Math.round(stamps[0].score * 10000) / 100 + "%"}</Text>
              <Text style={{ width: width - 220, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }}>{stamps[0].name}</Text>
            </View>
          </View>

          <View style={{ width: width - 32, flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignSelf: 'center' }}>
            <View>
              <Text style={{ color: '#FFF', fontSize: 10 }}>{stamps[0].issuedOn}</Text>
              <View style={{ width: width / 2, backgroundColor: '#ECEFF1', borderRadius: 16, padding: 8, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{stamps[0].country.trim()}</Text>
              </View>
            </View>
            <View>
              <Ionicons
                name='arrow-forward' size={24}
                color='#FFF'
                style={{ position: 'absolute', bottom: 0, right: 0 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {stamps.slice(1).map(stamp => (
          <TouchableOpacity
            key={stamp._id}
            style={{
              margin: 8, padding: 8, backgroundColor: '#F5F5F5', borderRadius: 16,
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 3,
            }}
            onPress={async () => {
              if (!isPurchased) {
                setShowLoading(true);
                console.log("start loading...")
                await sleep(2000)
                setShowLoading(false);
                try {
                  interstitial.show();
                  setLoaded(false);
                  interstitial.load();
                } catch {
                  interstitial.load();
                }
              }
              navigation.navigate('Detail', { stampId: stamp.stampId })
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <ImageBackground style={{ width: 100, height: 100, margin: 16, alignSelf: 'center' }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ resizeMode: 'contain' }} />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ width: width - 200, marginBottom: 16, color: '#26A69A', alignSelf: 'center', textAlign: 'center' }}>{"Accuracy: " + Math.round(stamp.score * 10000) / 100 + "%"}</Text>
                <Text style={{ width: width - 200, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{stamp.name}</Text>
              </View>
            </View>
            <View style={{ width: width - 32, flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignSelf: 'center' }}>
              <View>
                <Text style={{ fontSize: 10 }}>{stamp.issuedOn}</Text>
                <View style={{ width: width / 2, backgroundColor: '#90A4AE', borderRadius: 16, padding: 8, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#FFF' }}>{stamp.country.trim()}</Text>
                </View>
              </View>
              <View>
                <Ionicons
                  name='arrow-forward' size={24}
                  color='#455A64'
                  style={{ position: 'absolute', bottom: 0, right: 0 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 200 }} />
      </ScrollView>}

      {!identifying && <TouchableOpacity style={{ position: 'absolute', top: insets.top + 32, left: 16 }} onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StampId' }]
        });
        return true;
      }}>
        <ImageBackground source={require('../assets/back_detail_button.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>}
      {!isPurchased && isShowLoading && <View style={{ width: width, height: height + 50, position: 'absolute', top: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
          <LottieView source={require('../assets/loadding.json')} autoPlay loop style={{ width: '200%', height: '200%' }} />
        </View>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  bottomView: {
    position: 'absolute', bottom: 0, left: 0, width: '100%', padding: 16, backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addBtn: {
    width: width - 32,
    backgroundColor: '#1FA787',
    alignSelf: 'center',
    flexDirection: 'row', padding: 12, borderRadius: 24, alignItems: 'center', justifyContent: 'center',
  },
  subView: {
    borderTopWidth: 1, borderTopColor: '#DDDDDD', paddingBottom: 16, marginBottom: 16, paddingTop: 16
  },
  ebayItem: {
    width: width - 32, paddingTop: 8, paddingBottom: 8, marginBottom: 16, borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: '#F2F5F7'
  },
  confirmView: {
    width: width - 64, position: 'absolute',
    bottom: 32, left: 32,
    borderRadius: 16,
    backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E6E6E6'
  }
});
