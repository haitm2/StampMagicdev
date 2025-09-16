
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArticleGetter, IAP } from '../utils';
import TypewriterText from '../components/TypeWriterText';
import InAppReview from 'react-native-in-app-review';
import { AdEventType, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const articles = ArticleGetter.getArticles();

export default function Main({ navigation, route }) {
  const [isPurchased, setPurchased] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);

  const insets = useSafeAreaInsets();

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
        await sleep(500);
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
          <View style={{ marginTop: insets.top + 16 }}>
            <View style={{ marginBottom: 8, alignItems: 'center' }}>
              <ImageBackground source={require('../assets/img_flag.webp')} style={{ width: 100, height: 100 }} imageStyle={{ resizeMode: 'contain' }} />
              <View style={{ width: width - 32, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 20, margin: 4, marginTop: 16 }}>Know what's in your pocket</Text>
                <Text style={{ textAlign: 'center', fontSize: 14, color: '#FFF' }}>Tap here to recorgize stamps</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 8, marginBottom: 16 }}>
              <TouchableOpacity
                style={{ width: width / 2 - 24, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}
                onPress={async () => {
                  if (!isPurchased) {
                    navigation.navigate('Premium', { type: 'UNLOCK_SEARCH' });
                  } else {
                    navigation.navigate('Search');
                  }
                }}
              >
                <ImageBackground style={{ width: 32, height: 32, margin: 8 }} source={require('../assets/ic_search_edt.png')} />
                <Text style={{ fontWeight: 'bold' }}>Search</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 2 - 24, marginLeft: 16, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}
                onPress={async () => {
                  navigation.navigate('Camera');
                }}
              >
                <ImageBackground style={{ width: 32, height: 32, margin: 8 }} source={require('../assets/ic_camera.png')} />
                <Text style={{ fontWeight: 'bold' }}>Identify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground >

        {articles.map(item => (
          <TouchableOpacity
            style={styles.tipItem} key={item.title}
            onPress={async () => {
              try {
                if (!isPurchased) {
                  setShowLoading(true);
                  console.log("start loading...")
                  await sleep(200)
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
      </ScrollView >

      <TouchableOpacity
        style={{ position: 'absolute', top: insets.top + 16, right: 16, width: 36, height: 36, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8 }}
        onPress={() => navigation.navigate('Setting')}
      >
        <Ionicons
          name='settings' size={20}
          color='#000'
        />
      </TouchableOpacity>

      {
        !isPurchased && <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 16, bottom: insets.bottom + 76, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
          onPress={() => {
            navigation.navigate('Premium', { type: 'HOME IAP BANNER' });
          }}
        >
          <View style={{ width: width - 150, margin: 16 }}>
            <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Upgrate to Premium</Text>
            <Text style={{ fontSize: 10, color: '#FFF' }}>Use the app without limits</Text>
          </View>
          <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 8, margin: 16 }}>
            <Ionicons
              name='mail-unread' size={28}
              color='#E64A19'
            />
          </View>
        </TouchableOpacity>
      }

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
    borderWidth: 1,
    borderColor: '#189777',
    shadowOffset: { width: 1, height: 1 },
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
  tipItem: {
    padding: 8, marginTop: 8, marginLeft: 16, marginRight: 16, flexDirection: 'row', justifyContent: 'space-between',
  },
});
