import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AES, IAP } from '../utils';
import InAppReview from 'react-native-in-app-review';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';

const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({
  ios: TestIds.INTERSTITIAL,
  android: 'ca-app-pub-9597010572153445/3160102455'
});

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia', 'Denmark', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macao', 'Madagascar', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russian', 'Saudi Arabia', 'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom of Great Britain & Northern Ireland', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
]

export default function Search({ route }) {
  const navigation = useNavigation();
  const [stamps, setStamps] = useState([]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [country, setCountry] = useState('United States of America');
  const [keyword, setKeyword] = useState('1 cent');
  const [searching, setSearching] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

  function convertToImageUrl(code) {
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/f/${prefix}/${suffix}/image.jpg`;
  }

  async function searchStamp() {
    setSearching(true);
    try {
      console.log("searching stamp...");
      var searchUrl = "https://stampsnap.magicdev.fun/api/v2/searchStamps?q=" + encodeURIComponent(keyword) + "&country=" + encodeURIComponent(country);
      console.log(searchUrl);
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: searchUrl,
        headers: {}
      };

      var data = await axios.request(config);
      var dataDecrypted = await AES.decrypt(data.data);
      var rsObj = JSON.parse(dataDecrypted);
      setStamps(rsObj.data);
      showRateDialog();
      console.log("searching stamp done");
    } catch (err) {
      console.log(err);
    }
    setSearching(false);
  }

  async function getRandomStamps() {
    setSearching(true);
    try {
      console.log("getting random stamp...");
      var searchUrl = "https://stampsnap.magicdev.fun/api/v2/randomStamps";
      console.log(searchUrl);
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: searchUrl,
        headers: {}
      };

      var data = await axios.request(config);
      var dataDecrypted = await AES.decrypt(data.data);
      var rsObj = JSON.parse(dataDecrypted);
      setStamps(rsObj.data);
      showRateDialog();
      console.log("random stamp done");
    } catch (err) {
      console.log(err);
    }
    setSearching(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#303234"
        barStyle="light-content"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.titleInput}>{"Country"}</Text>
        <TouchableOpacity style={styles.input} onPress={() => setShowCountryPicker(true)}>
          <Text>{country}</Text>
        </TouchableOpacity>
      </View>
      {showCountryPicker && <View style={{ height: 500, backgroundColor: '#FFF', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 16, marginBottom: 32 }}>Select country</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {countries.map(c => (
            <TouchableOpacity
              key={c} style={{ padding: 8, width: width - 32 }}
              onPress={() => {
                setCountry(c);
                setShowCountryPicker(false);
              }}
            >
              <Text style={{ margin: 8, textAlign: 'center', color: c == country ? '#000' : 'grey' }}>{c}</Text>
              <View style={{ backgroundColor: 'grey', height: 1 }} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.titleInput}>{"Keyword"}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setKeyword(text.split(0, 30))}
          value={keyword}
        />
      </View>
      <TouchableOpacity
        style={{ margin: 16, padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 8, width: width - 32, backgroundColor: '#00A362' }}
        onPress={async () => {
          if (!searching) {
            await searchStamp();
          }
        }}
      >
        {!searching && <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Search stamp</Text>}
        {searching && <ActivityIndicator color={"#FFF"} size={"small"} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginLeft: 16, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, width: width - 32, backgroundColor: '#880E4F' }}
        onPress={async () => {
          if (!searching) {
            await getRandomStamps();
          }
        }}
      >
        {!searching && <Text style={{ fontWeight: '500', color: '#FFF' }}>I'm Feeling Lucky</Text>}
        {searching && <ActivityIndicator color={"#FFF"} size={"small"} />}
      </TouchableOpacity>


      <ScrollView showsVerticalScrollIndicator={false}>
        {bannerError || isPurchased ?
          null :
          <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
            <BannerAd
              size={BannerAdSize.MEDIUM_RECTANGLE}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: TestIds.BANNER,
                android: 'ca-app-pub-9597010572153445/1974512282',
              })}
              onAdFailedToLoad={(error) => {
                console.log(error);
                setBannerError(true);
              }}
            />
          </View>
        }
        {stamps.map(stamp => (
          <TouchableOpacity
            style={styles.item} key={stamp.stampId}
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
            <ImageBackground style={{ width: 80, height: 80, marginLeft: 8 }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ borderRadius: 8 }} />
            <View style={{ width: width - 180, marginLeft: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>{stamp.name.length < 50 ? stamp.name : stamp.name.substr(0, 47) + '...'}</Text>
              <Text style={{ fontSize: 14, fontSize: 12 }}>{"Issued on: " + stamp.issuedOn}</Text>
              <Text style={{ color: '#006A40', fontSize: 12 }}>{stamp.country}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 200 }} />
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
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  item: {
    marginLeft: 16,
    width: width - 32,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  titleInput: {
    marginLeft: 16, fontWeight: 'bold', color: '#097754',
  },
  input: {
    width: width - 116, margin: 8, padding: 8, borderRadius: 16, backgroundColor: '#FFF'
  }
});
