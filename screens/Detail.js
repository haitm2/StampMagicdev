import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AES, IAP } from '../utils';
import { set } from 'lodash';
import InAppReview from 'react-native-in-app-review';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import DialogInput from 'react-native-dialog-input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import LottieView from 'lottie-react-native';
import axios from 'axios';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const [stamp, setStamp] = useState(null);
  const [bannerError, setBannerError] = useState(false);
  const [isPurchased, setPurchased] = useState(false);
  const [collections, setCollections] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const insets = useSafeAreaInsets();

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

  const createCollection = async (name) => {
    try {
      console.log("Jump to this...")
      var collectionId = new Date().getTime() + '';
      console.log("collectionId =" + collectionId);
      var coll = {
        id: collectionId,
        name,
        previews: [],
        totalStamps: 0,
        totalValue: 0,
        date: new Date().toDateString()
      }
      // console.log(JSON.stringify(coll));
      await AsyncStorage.setItem('collectionv2_' + collectionId, JSON.stringify(coll))
      await getAllCollections();

      var idInCollection = "stampcolv2_" + collectionId + "_" + stamp.stampId;
      var savedAddon = await AsyncStorage.getItem(idInCollection);
      if (!savedAddon) {
        await AsyncStorage.setItem(idInCollection, JSON.stringify(stamp));
        setShowAdd(false);
        setShowAddDialog(false);
        alert("Saved \"" + stamp.name + "\" to collection " + name);
      } else {
        setShowAdd(false);
        setShowAddDialog(false);
        alert("\"" + stamp.name + "\" existed in collection " + name);
      }
    } catch (err) {
      console.log(err);
      setShowAdd(false);
      setShowAddDialog(false);
    }
  }

  const getAllCollections = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const collectionsDatas = [];
    for (const key of keys) {
      if (key.includes("collectionv2_")) {
        const value = await AsyncStorage.getItem(key);
        // console.log("key =", key, ", value =", value);
        const col = JSON.parse(value);
        collectionsDatas.push({
          id: col.id,
          name: col.name
        });
      }
    }
    console.log('=====> collectionsDatas:', collectionsDatas);
    setCollections(collectionsDatas);
    return collectionsDatas;
  }

  async function getStampDetail() {
    try {
      console.log("route.params.stampId =", route.params.stampId);
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://stampsnap.stampidentifierai.com/api/v2/stamps/' + route.params.stampId,
        headers: {}
      };

      var data = await axios.request(config);
      var dataDecrypted = await AES.decrypt(data.data);
      var rsObj = JSON.parse(dataDecrypted);
      setStamp(rsObj.data);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  async function updateStampDetail(stampId) {
    try {
      console.log("stampId =", stampId);
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://stampsnap.stampidentifierai.com/api/v2/stamps/' + stampId,
        headers: {}
      };

      var data = await axios.request(config);
      var dataDecrypted = await AES.decrypt(data.data);
      var rsObj = JSON.parse(dataDecrypted);
      setStamp(rsObj.data);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    getStampDetail();
  }, []);

  function convertToImageUrl(code) {
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/f/${prefix}/${suffix}/image.jpg`;
  }


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#303234"
        barStyle="dark-content"
      />

      <DialogInput isDialogVisible={showAddDialog}
        title="Add collection"
        message="Enter name for your collection, then press the Submit button"
        submitInput={async (inputText) => {
          await createCollection(inputText);
        }}
        closeDialog={() => { setShowAddDialog(false) }}>
      </DialogInput>

      {stamp == null && <View style={{ margin: 16, marginTop: 50, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <ActivityIndicator size={"small"} />
        <Text style={{ margin: 8 }}>Getting stamp data...</Text>
      </View>}

      {bannerError || isPurchased ?
        null :
        <View style={{ width: '100%', alignItems: 'center', marginTop: insets.top + 64 }}>
          <BannerAd
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            unitId={__DEV__ ? TestIds.BANNER : Platform.select({
              ios: 'ca-app-pub-1354543839348242/5544820117',
              android: 'ca-app-pub-9597010572153445/5144511231',
            })}
            onAdFailedToLoad={(error) => {
              console.log(error);
              setBannerError(true);
            }}
          />
        </View>
      }

      {stamp && stamp.images && <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 50 }} key={stamp._id}>
          <ImageBackground style={{ width: 150, height: 150, margin: 16, alignSelf: 'center' }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ resizeMode: 'contain' }} />
          <Text style={{ margin: 16, fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>{stamp.name}</Text>
          {stamp.prices && <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Market price</Text>}
          {stamp.prices && <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginBottom: 16, marginTop: 16 }}>
              {stamp.prices && stamp.prices.map(price => (
                <TouchableOpacity style={styles.ebayItem} key={price.buyUrl} onPress={() => {
                  if (isPurchased) {
                    Linking.openURL(price.buyUrl)
                  } else {
                    navigation.navigate('Premium', { type: "DETAIL SCREEN -> UNLOCK EBAY PRICE" });
                  }
                }}>
                  <ImageBackground style={{ width: width / 2 - 16, height: width / 2 - 16, backgroundColor: '#263238', borderRadius: 8 }} imageStyle={{ resizeMode: 'contain' }} source={{ uri: price.img }} />
                  <View>
                    <Text numberOfLines={2} style={{ width: width / 2 - 16, fontSize: 12, marginTop: 16 }}>{price.title}</Text>
                    {isPurchased && <Text style={{ width: width / 2 - 16, fontWeight: 'bold', marginTop: 8, marginBottom: 8, color: '#00695C' }}>{price.price}</Text>}
                    {!isPurchased && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <Text style={{ fontWeight: 'bold', marginRight: 8, color: '#00695C' }}>Price:</Text>
                      <ImageBackground style={{ width: 24, height: 24 }} source={require('../assets/lock.webp')} imageStyle={{ resizeMode: 'contain' }} />
                    </View>}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>}
          {
            !isPurchased && <TouchableOpacity
              style={{ marginLeft: 16, marginTop: 16, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
              onPress={async () => {
                var lastType = "DETAIL IAP BANNER";
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
          <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Stamp info</Text>
          <View style={styles.infoBoard}>
            <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Country: </Text>
              <Text style={{ width: width - 150 }}>{stamp.country}</Text>
            </View>
            {stamp.series !== "" && <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Series: </Text>
              <Text style={{ width: width - 150 }}>{stamp.series}</Text>
            </View>}
            {stamp.issuedOn !== "" && <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Issued on: </Text>
              <Text style={{ width: width - 150 }}>{stamp.issuedOn}</Text>
            </View>}
            {stamp.faceValue !== "" && <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Face value: </Text>
              <Text style={{ width: width - 150 }}>{stamp.faceValue}</Text>
            </View>}
            {stamp.size !== "" && <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Size: </Text>
              <Text style={{ width: width - 150 }}>{stamp.size}</Text>
            </View>}
            {stamp.description !== "" && <View style={{ width: width - 32, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#546E7A' }}>Description: </Text>
              <Text style={{ width: width - 150 }}>{stamp.description}</Text>
            </View>}
            {bannerError || isPurchased ?
              null :
              <View style={{ width: '100%', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
                <BannerAd
                  size={BannerAdSize.MEDIUM_RECTANGLE}
                  unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                    ios: 'ca-app-pub-1354543839348242/5544820117',
                    android: 'ca-app-pub-9597010572153445/5144511231',
                  })}
                  onAdFailedToLoad={(error) => {
                    console.log(error);
                    setBannerError(true);
                  }}
                />
              </View>
            }
          </View>
          {stamp.series && stamp.similars && <Text style={{ width: width - 32, marginLeft: 16, marginTop: 32, fontSize: 16, fontWeight: 'bold' }}>Stamps in series</Text>}
          {stamp.series && stamp.similars && stamp.similars.slice(0, !showMore ? 3 : stamp.similars.length).map(_stamp => (
            <TouchableOpacity
              key={_stamp._id}
              style={{ width: width - 32, flexDirection: 'row', margin: 8, marginTop: 16, marginLeft: 16, marginRight: 16 }}
              onPress={async () => {
                // setStamp(null);
                console.log(">>>>", _stamp.stampId);
                setStamp(null);
                navigation.setParams({ stampId: _stamp.stampId });
                await updateStampDetail(_stamp.stampId);
              }}
            >
              <ImageBackground style={{ width: 100, height: 100 }} source={{ uri: convertToImageUrl(_stamp.images[0]) }} imageStyle={{ resizeMode: 'contain' }} />
              <View style={{ width: width - 148, marginLeft: 16 }}>
                <Text style={{ fontWeight: 'bold' }}>{_stamp.name}</Text>
                <Text>{"Country: " + _stamp.country}</Text>
                <Text>{"Series: " + _stamp.series}</Text>
                <Text>{"Issued on: " + _stamp.issuedOn}</Text>
                <Text>{"Face value: " + _stamp.faceValue}</Text>
                <Text>{"Size: " + _stamp.size}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {stamp.series && stamp.similars && stamp.similars.length > 3 && <TouchableOpacity
            style={{ flexDirection: 'row', padding: 8, alignSelf: 'center' }}
            onPress={() => {
              if (isPurchased) {
                setShowMore(prevState => !prevState)
              } else {
                navigation.navigate('Premium', { type: 'DETAIL SCREEN -> SEE MORE SIMILAR STAMPS' });
              }
            }}
          >
            <Ionicons
              name={showMore ? 'chevron-up-outline' : 'chevron-down-outline'} size={14}
              color='#000'
            />
            <Text style={{ marginLeft: 4, fontSize: 12, textDecorationLine: 'underline' }}>{showMore ? 'Collapse' : 'See more'}</Text>
          </TouchableOpacity>}
          <View style={{ height: 200 }} />
        </View>

      </ScrollView>}

      {stamp && <View style={[styles.bottomView, { bottom: insets.bottom }]}>
        {!showAdd && <TouchableOpacity
          style={styles.addBtn}
          onPress={async () => {
            var _collections = await getAllCollections();
            console.log(_collections);
            if (_collections.length > 0) {
              setShowAdd(prevState => !prevState)
            } else {
              setShowAddDialog(true);
            }
          }}
        >
          <ImageBackground source={require('../assets/add_white.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
          <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Add to Collection</Text>
        </TouchableOpacity>}
        {showAdd && <TouchableOpacity
          style={{ width: '96%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}
          onPress={() => setShowAdd(prevState => !prevState)}
        >
          <View />
          <Ionicons
            name='close' size={32}
            color='#1FA787'
          />
        </TouchableOpacity>}
        {showAdd && collections.length > 0 && <ScrollView style={{ height: 400 }}>
          {collections.map(collection => (
            <View key={collection.id} style={{ padding: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <Text style={{ width: width / 2 - 64, fontWeight: 'bold', fontSize: 16 }}>{collection.name}</Text>

                <TouchableOpacity
                  style={{ width: width / 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: 8, backgroundColor: '#1FA787', borderRadius: 8 }}
                  onPress={async () => {
                    var idInCollection = "stampcolv2_" + collection.id + "_" + stamp.stampId;
                    var savedAddon = await AsyncStorage.getItem(idInCollection);
                    setShowAdd(prevState => !prevState)
                    if (!savedAddon) {
                      await AsyncStorage.setItem(idInCollection, JSON.stringify(stamp));

                      alert("Saved \"" + stamp.name + "\" to collection " + collection.name);
                    } else {
                      alert(stamp.name + "\" existed in collection " + collection.name);
                    }
                  }}
                >
                  <Ionicons
                    name='add' size={12}
                    color='#FFF'
                  />
                  <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 12, marginLeft: 4 }}>Add to this collection</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
        }
        {showAdd && collections.length > 0 && <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            if (collections.length < 2 || isPurchased) {
              setShowAddDialog(true)
            } else {
              navigation.navigate('Premium', { type: 'DETAIL SCREEN -> CREATE MORE 2 COLLECTIONS' });
            }
          }}
        >
          <ImageBackground source={require('../assets/add_white.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
          <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Add to other collection</Text>
        </TouchableOpacity>}
      </View>}
      <TouchableOpacity style={{ position: 'absolute', top: 50, left: 16 }} onPress={() => {
        navigation.goBack();
      }}>
        <ImageBackground source={require('../assets/back_detail_button.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  bottomView: {
    position: 'absolute', left: 0, width: '100%', padding: 16, backgroundColor: '#FFF',
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
  },
  ebayItem: {
    width: width / 2, padding: 8, marginLeft: 16, backgroundColor: '#FFF', borderRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2
  },
  infoBoard: {
    width: width - 32, alignSelf: 'center', backgroundColor: '#FFF', borderRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2
  }
});
