import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';
import { get, set } from 'lodash';
import { IAP } from '../utils';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';

const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({
  ios: TestIds.INTERSTITIAL,
  android: 'ca-app-pub-9597010572153445/6614507593'
});

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);

const { width, height } = Dimensions.get('window');

export default function Collection() {
  const navigation = useNavigation();
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(-100);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [totalStamps, setTotalStamps] = useState(0);
  const [collections, setCollections] = useState([]);
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
        setPurchased(result);
      });

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const createCollection = async (name) => {
    console.log("Jump to this...")
    var id = new Date().getTime() + '';
    console.log("id =" + id);
    var coll = {
      id,
      name,
      previews: [],
      totalStamps: 0,
      date: new Date().toDateString()
    }
    // console.log(JSON.stringify(coll));
    await AsyncStorage.setItem('collectionv2_' + id, JSON.stringify(coll))
    await getAllCollections();
    setShowAddDialog(false);
  }

  const editCollectionName = async (id, name) => {
    var collectionText = await AsyncStorage.getItem('collectionv2_' + id);
    var collection = JSON.parse(collectionText);
    await AsyncStorage.setItem('collectionv2_' + id, JSON.stringify({
      id,
      name,
      previews: collection.previews,
      totalStamps: collection.totalStamps,
      date: collection.date
    }))
    await getAllCollections();
    setShowEditDialog(false);
  }

  const showDeleteAlert = async (id) => {
    var collectionText = await AsyncStorage.getItem('collectionv2_' + id);
    var collection = JSON.parse(collectionText);


    Alert.alert(
      'Delete collection "' + collection.name + '"',
      'Are you sure you want to remove this collection?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await AsyncStorage.removeItem("collectionv2_" + id);
            const keys = await AsyncStorage.getAllKeys();
            for (const key of keys) {
              if (key.includes("stampcolv2_" + collection.id + "_")) {
                await AsyncStorage.removeItem(key);
              }
            }
            await getAllCollections();
          }
        }
      ]
    );
  }

  const getAllCollections = async () => {
    try {
      console.log("Getting all collection.......");
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      var collectionsDatas = [];
      for (const key of keys) {
        if (key.includes("collectionv2_")) {
          // console.log("key collection =", key);
          const value = await AsyncStorage.getItem(key);
          // console.log("value collection =", value);

          var col = JSON.parse(value);

          var totalStamps = 0;

          for (const stampkey of keys) {
            if (stampkey.includes("stampcolv2_" + col.id + "_"))
              if (stampkey.includes("stampcolv2_" + col.id + "_")) {
                totalStamps++;
              }
          }
          set(col, 'totalStamps', totalStamps);
          collectionsDatas.push(col);
        }
      }


      console.log('=====> collectionsDatas:', collectionsDatas);
      if (collectionsDatas.length == 0) {
        setCollections([])
      }
      else {
        setCollections(collectionsDatas)
      };

      var _totalStamps = 0;
      for (var col of collectionsDatas) {
        _totalStamps = _totalStamps + col.totalStamps;
      }
      setTotalStamps(_totalStamps);
    } catch (err) {
      console.log("DMM", err);
    }
  }


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Collections</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ position: 'absolute', top: 8, right: 16 }}
          onPress={() => navigation.navigate("Setting")}
        >
          <View style={[styles.smallViewIcon, { marginTop: 4, width: 36, height: 36 }]}>
            <ImageBackground source={require('../assets/setting.png')} style={{ width: 24, height: 24 }} />
          </View>
        </TouchableOpacity>
      )
    });
  }, [navigation]);


  useFocusEffect(
    React.useCallback(() => {
      getAllCollections();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#303234"
        barStyle="light-content"
      />
      <ImageBackground
        style={{ width: width, height: Math.round(width * 1015 / 2048) }}
        source={require('../assets/collection_banner.png')}
        imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      >
        <View style={styles.infoBoard}>
          <View style={{ width: width / 2 - 49, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#00A362' }}>{totalStamps}</Text>
            <Text style={{ fontSize: 10, color: '#00A362' }}>Total stamps</Text>
          </View>
          <View style={{ width: 1, height: 40, backgroundColor: '#AAA', marginLeft: 16, marginRight: 16 }} />
          <View style={{ width: width / 2 - 49, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#00A362' }}>{collections.length}</Text>
            <Text style={{ fontSize: 10, color: '#00A362' }}>Collections</Text>
          </View>
        </View>
      </ImageBackground>
      <DialogInput isDialogVisible={showAddDialog}
        title='Add collection'
        message='Enter name for your collection, then press the Submit button'
        submitInput={async (inputText) => {
          await createCollection(inputText);
        }}
        closeDialog={() => { setShowAddDialog(false) }}>
      </DialogInput>
      <DialogInput isDialogVisible={showEditDialog}
        title='Edit collection name'
        message='Enter new name for your collection, then press the Submit button'
        submitInput={async (inputText) => {
          await editCollectionName(selectedCollection, inputText);
        }}
        closeDialog={() => { setShowEditDialog(false) }}>
      </DialogInput>

      <TouchableOpacity
        style={styles.addCollectionButton}
        onPress={() => {
          console.log("collections.length =", collections.length);
          if (isPurchased || collections.length < 2) {
            setShowAddDialog(true)
          } else {
            navigation.navigate('Premium', { type: 'COLLECTIONS SCREEN -> CREATE MORE 2 COLLECTIONS' });
          }
        }}
      >
        <Text style={{ color: '#00A362' }}>+ New collection</Text>
      </TouchableOpacity>

      {collections.length == 0 && <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 32 }}>
        <ImageBackground source={require('../assets/empty_box.png')} style={{ width: 80, height: 80 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Empty list!</Text>
        <Text style={{ fontSize: 12, margin: 8, textAlign: 'center' }}>Create your own collection or press the scan button below, scan the stamp and add the scanned stamp to a new collection.</Text>
      </View>}

      {collections.length > 0 && <ScrollView>
        {bannerError || isPurchased ?
          null :
          <View style={{ width: '100%', alignItems: 'center' }}>
            <BannerAd
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: TestIds.BANNER,
                android: 'ca-app-pub-9597010572153445/8173707678',
              })}
              onAdFailedToLoad={(error) => {
                console.log(error);
                setBannerError(true);
              }}
            />
          </View>
        }
        {collections.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.collectionView}
            onPress={async () => {
              if (item.totalStamps > 0) {
                try {
                  if (!isPurchased) {
                    setShowLoading(true);
                    console.log("start loading...")
                    await sleep(2000)
                    setShowLoading(false);
                    try {
                      interstitial.show();
                      interstitial.load();
                    } catch {
                      interstitial.load();
                    }
                  }
                } catch (err) {
                  interstitial.load();
                }
                navigation.navigate('CollectionDetail', { collectionId: item.id, collectionName: item.name })
              } else {
                alert('This collection does not have any stamps yet. Click the scan button below to scan the stamp and add it to this collection.');
              }
            }}
          >
            <View style={{ width: width * 2 / 3 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4, color: '#00A362' }}>{item.name}</Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>{item.totalStamps + " stamps"}</Text>
              <View style={{ flexDirection: 'row' }}>
                <ImageBackground style={{ width: 12, height: 12 }} source={require('../assets/date2.png')} />
                <Text style={{ fontSize: 12, marginLeft: 8 }}>{item.date}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ width: 36, height: 36, position: 'absolute', top: 8, right: 8, padding: 4, backgroundColor: '#E4D6C2', borderRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
              onPress={() => {
                try {
                  setSelectedCollection(item.id);
                  showDeleteAlert(item.id);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <Ionicons
                name='trash' size={24}
                color='#000'
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ width: 36, height: 36, position: 'absolute', top: 8, right: 52, padding: 4, backgroundColor: '#00A362', borderRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
              onPress={() => {
                try {
                  setSelectedCollection(item.id);
                  setShowEditDialog(true);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <Ionicons
                name='pencil' size={24}
                color='#FFF'
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        <View style={{ height: 300 }} />
      </ScrollView>}
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
  infoBoard: {
    width: width - 32, padding: 16,
    flexDirection: 'row',
    position: 'absolute', bottom: 16, left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  createButton: {
    width: width * 0.4, padding: 12, backgroundColor: '#F76D1F', margin: 8, borderRadius: 24,
    borderWidth: 2,
    borderTopColor: '#f7a577',
    borderLeftColor: '#f7a577',
    borderBottomColor: '#ad4205',
    borderRightColor: '#ad4205',
    alignItems: 'center',
    justifyContent: 'center'
  },
  premiumBanner: {
    alignSelf: 'center', marginBottom: 8, width: width - 32,
  },
  collectionView: {
    marginTop: 16, marginLeft: 16, marginRight: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addCollectionButton: {
    width: width - 32, margin: 16, padding: 16, borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    backgroundColor: '#FFF',
    borderColor: '#00A362',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
