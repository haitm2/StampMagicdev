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
  const [showMoreMarket, setShowMoreMarket] = useState(false);
  const [priceRange, setPriceRange] = useState("");

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
      // console.log(JSON.stringify(rsObj.data))
      if (rsObj.data.markets && rsObj.data.markets.length > 0) {
        setPriceRange(getPriceRangeStringByMarket(rsObj.data.markets));
      } else if (rsObj.data.prices && rsObj.data.prices.length > 0) {
        setPriceRange(getPriceRangeStringByPrices(rsObj.data.prices));
      }
    } catch (err) {
      console.log("error: ", err);
    }
  }

  function getPriceRangeStringByMarket(markets) {
    try {
      // Lọc ra các giá hợp lệ và chuyển thành số
      // console.log(markets);
      const prices = markets
        .map(item => {
          if (!item.price) return null;
          const match = item.price.match(/US\$\s*([\d.]+)/);
          return match ? parseFloat(match[1]) : null;
        })
        .filter(val => val !== null);

      if (prices.length === 0) {
        return ""; // không có giá hợp lệ
      }

      var min = Math.min(...prices);
      var max = Math.max(...prices);

      if (min == max) {
        var min = min - 0.01;
        var max = max + 0.01;
      }

      return `$${min.toFixed(2)} - $${max.toFixed(2)}`;
    } catch (e) {
      return "";
    }
  }

  function getPriceRangeStringByPrices(items) {
    try {
      const prices = [];

      for (const item of items) {
        const match = item.price.match(/(?:Price:\s*)?(?:(USD|GBP|EUR)\s*)?([\d,]+(?:\.\d+)?)(?:\s*(VND))?/i);

        if (match) {
          const currencyPrefix = match[1]; // USD, GBP, EUR,...
          const amount = parseFloat(match[2].replace(/,/g, ''));
          const currencySuffix = match[3]; // VND

          if (!isNaN(amount)) {
            prices.push({
              amount,
              currency: currencyPrefix || currencySuffix
            });
          }
        }
      }

      if (prices.length === 0) return "";

      const currency = prices[0].currency;

      // Đảm bảo tất cả giá trị có cùng đơn vị tiền tệ
      if (!prices.every(p => p.currency === currency)) return "";

      const amounts = prices.map(p => p.amount);
      const min = Math.min(...amounts).toFixed(2);
      const max = Math.max(...amounts).toFixed(2);

      if (["USD", "GBP", "EUR"].includes(currency)) {
        return `${currency} ${min} - ${currency} ${max}`;
      } else {
        return `${min} ${currency} - ${max} ${currency}`;
      }
    } catch (e) {
      return "";
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

  function convertToBigImageUrl(code) {
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/b/${prefix}/${suffix}/image.jpg`;
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

      {stamp && stamp.images && <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 50 }} key={stamp._id}>
          <ImageBackground style={{ width: 150, height: 150, margin: 16, alignSelf: 'center' }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ resizeMode: 'contain' }} />
          <Text style={{ margin: 20, fontSize: 20, fontWeight: 'bold' }}>{stamp.name}</Text>

          <View style={styles.priceRange}>
            <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Market price</Text>
            <Text style={{ marginLeft: 16, fontSize: 12, fontWeight: '400', marginTop: 4 }}>Based on our listings</Text>
            <Text style={{ fontSize: 18, color: '#795548', fontWeight: '600', margin: 16 }}>{priceRange}</Text>

            {stamp.markets && stamp.markets.slice(0, !showMoreMarket ? 2 : stamp.markets.length).map(item => (
              <TouchableOpacity
                key={item.buyUrl}
                style={{ flexDirection: 'row', marginBottom: 16, marginRight: 16, marginLeft: 16, backgroundColor: '#EFEFEF', borderRadius: 8, padding: 8 }}
                onPress={() => {
                  if (isPurchased) {
                    Linking.openURL(item.buyUrl)
                  } else {
                    navigation.navigate('Premium', { type: "DETAIL SCREEN -> UNLOCK COLNECT PRICE" });
                  }
                }}
              >
                <ImageBackground style={{ width: 100, height: 100, backgroundColor: '#263238', borderRadius: 4 }} imageStyle={{ borderRadius: 4, resizeMode: 'center' }} source={{ uri: item.img }} />
                <View style={{ width: width - 188, marginLeft: 8 }}>
                  <Text style={{ fontWeight: 'bold', color: '#00695C' }}>{item.title}</Text>

                  <Text numberOfLines={1} style={{ fontSize: 10 }}>{"Condition: " + item.condition}</Text>

                  {isPurchased && <Text style={{ fontWeight: 'bold', marginTop: 8, marginBottom: 8, color: '#000' }}>{item.price}</Text>}
                  {!isPurchased && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontWeight: 'bold', marginRight: 8, color: '#00695C' }}>Price:</Text>
                    <ImageBackground style={{ width: 24, height: 24 }} source={require('../assets/lock.webp')} imageStyle={{ resizeMode: 'contain' }} />
                  </View>}

                  {item.subTitle && <Text numberOfLines={2} style={{ fontSize: 12 }}>{"More info: " + item.subTitle}</Text>}

                  <View style={{ width: '100%', backgroundColor: '#00695C', padding: 8, borderRadius: 4, marginTop: 8 }}>
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 12, color: '#FFF' }}>Buy this stamp</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {stamp.markets && stamp.markets.length > 3 && <TouchableOpacity
              style={{ flexDirection: 'row', padding: 8, alignSelf: 'center' }}
              onPress={() => {
                if (isPurchased) {
                  setShowMoreMarket(prevState => !prevState)
                } else {
                  navigation.navigate('Premium', { type: 'DETAIL SCREEN -> SEE MORE COLNECT STAMPS' });
                }
              }}
            >
              <Ionicons
                name={showMoreMarket ? 'chevron-up-outline' : 'chevron-down-outline'} size={14}
                color='#000'
              />
              <Text style={{ marginLeft: 4, fontSize: 12, textDecorationLine: 'underline' }}>{showMoreMarket ? 'Collapse' : 'See more'}</Text>
            </TouchableOpacity>}
          </View>

          {stamp.prices && <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>Similar stamps on ebay</Text>}
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
                  <ImageBackground style={{ width: width / 3, height: width / 3, backgroundColor: '#263238', borderRadius: 8 }} imageStyle={{ resizeMode: 'contain' }} source={{ uri: price.img }} />
                  <View>
                    <Text numberOfLines={2} style={{ width: width / 3, fontSize: 12, marginTop: 16 }}>{price.title}</Text>
                    {isPurchased && <Text style={{ width: width / 3, fontWeight: 'bold', marginTop: 8, marginBottom: 8, color: '#00695C' }}>{price.price}</Text>}
                    {!isPurchased && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                      <Text style={{ fontWeight: 'bold', marginRight: 8, color: '#00695C' }}>Price:</Text>
                      <ImageBackground style={{ width: 24, height: 24 }} source={require('../assets/lock.webp')} imageStyle={{ resizeMode: 'contain' }} />
                    </View>}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>}
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

      {stamp && <View style={[styles.bottomView, { bottom: 0 }]}>
        {!showAdd && <TouchableOpacity
          style={[styles.addBtn, { marginBottom: insets.bottom }]}
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
          style={[styles.addBtn, { marginBottom: insets.bottom }]}
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

      {
        !isPurchased && !showAdd && <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 16, bottom: insets.bottom + 92, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
          onPress={() => {
            navigation.navigate('Premium', { type: 'DETAIL IAP BANNER' });
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


      <TouchableOpacity
        style={{ position: 'absolute', top: insets.top + 16, left: 16, width: 36, height: 36, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 8 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name='arrow-back' size={20}
          color='#000'
        />
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
  ebayItem: {
    width: width / 3 + 16, padding: 8, marginLeft: 16, backgroundColor: '#FFF', borderRadius: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoBoard: {
    width: width - 32, alignSelf: 'center', backgroundColor: '#FFF', borderRadius: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  priceRange: {
    backgroundColor: '#FFF', margin: 16, borderRadius: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }
});
