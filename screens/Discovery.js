import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, Image, ImageBackground, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InAppReview from 'react-native-in-app-review';
import { ArticleGetter, IAP } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import TypewriterText from '../components/TypeWriterText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({
  ios: TestIds.INTERSTITIAL,
  android: 'ca-app-pub-9597010572153445/6657294065'
});

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);

export default function Discovery({ navigation }) {

  const [bannerError, setBannerError] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const insets = useSafeAreaInsets();

  const [discovery, setDiscovery] = useState([]);
  const [tips, setTips] = useState([]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setShowLoading(true);
    console.log("start loading...")
    sleep(2000).then(async () => {
      setShowLoading(false);
    })
  }, []);

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
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Da load xong ad")
    });

    // Start loading the interstitial straight away
    IAP.isPurchased().then(result => {
      if (result == false) interstitial.load();
    });

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Discovery</Text>
        </View>
      ),
    });
  }, [navigation]);


  const getArticles = async () => {
    var _tips = await ArticleGetter.getTips();
    setTips(_tips)
    var _discovery = await ArticleGetter.getDiscovery();
    setDiscovery(_discovery);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView>
        <ImageBackground
          style={{ width: width, height: isPurchased ? Math.round(width * 1015 / 2048) : bannerError ? 200 : null }}
          source={require('../assets/collection_banner.png')}
          imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
        >
          {bannerError || isPurchased ?
            null :
            <View style={{ width: '100%', alignItems: 'center', marginTop: insets.top + 64, marginBottom: 16 }}>
              <BannerAd
                size={BannerAdSize.MEDIUM_RECTANGLE}
                unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                  ios: TestIds.BANNER,
                  android: 'ca-app-pub-9597010572153445/6078709569',
                })}
                onAdFailedToLoad={(error) => {
                  console.log(error);
                  setBannerError(true);
                }}
              />
            </View>
          }
        </ImageBackground>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal marginTop={16}>
          <View style={{ flexDirection: 'row' }}>
            {discovery.map(item => (
              <TouchableOpacity
                style={styles.mostValueItem} key={item.title}
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
                  navigation.navigate('Article', { title: item.title.split('\n')[0], image: item.image, contents: item.contents })
                }}
              >
                <ImageBackground source={item.image} style={{ width: 150, height: 150 }} imageStyle={{ borderRadius: 8 }}>
                </ImageBackground>
                <Text style={{ fontSize: 12, alignSelf: 'center', textAlign: 'center', width: 120, marginTop: 8, alignSelf: 'center', fontWeight: 'bold' }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Text style={{ fontWeight: 'bold', margin: 16 }}>Articles</Text>

        {tips.map(item => (
          <TouchableOpacity
            style={styles.tipItem} key={item.title}
            onPress={async () => {
              try {
                if (!isPurchased) {
                  setShowLoading(true);
                  console.log("start loading...")
                  await sleep(1000)
                  setShowLoading(false);
                }
              } catch (err) { }
              navigation.navigate('Article', { title: item.title.split('\n')[0], image: item.image, contents: item.contents })
            }}
          >
            <ImageBackground source={item.image} style={{ width: 100, height: 100 }} imageStyle={{ borderRadius: 8 }} />
            <View style={{ marginLeft: 8, width: Platform.isPad ? width - 220 : width - 152 }}>
              <Text style={{ fontWeight: 'bold', lineHeight: 20 }}>{item.title}</Text>
              <Text style={{ fontSize: 12, color: '#949494' }}>{item.contents[1].text.substring(0, 100) + '...'}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 200 }} />
      </ScrollView>

      {!isPurchased && <TouchableOpacity
        style={{ position: 'absolute', bottom: insets.bottom + 90, right: 20, flexDirection: 'row' }}
        onPress={async () => {
          navigation.navigate('OnboardingSurvey');
        }}
      >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9E9D24', '#827717']} style={styles.chatbox}>
          <TypewriterText text={'Small survey'} loop={true} speed={200} style={{ fontWeight: 'bold', color: '#FFF', marginLeft: 16, marginRight: 16 }} />
        </LinearGradient>
        <ImageBackground source={require('../assets/pointer.png')} style={{ width: 64, height: 64, margin: 8 }} />
      </TouchableOpacity>}

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
  tipItem: {
    padding: 8, marginBottom: 8, marginLeft: 16, marginRight: 16, flexDirection: 'row', justifyContent: 'space-between',
  },
  mostValueItem: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginLeft: 16,
    marginBottom: 16,
    padding: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
