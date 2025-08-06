import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAP } from '../utils';

const width = Dimensions.get('window').width;

export default function CollectionDetail({ route }) {
  const navigation = useNavigation();
  const [isPurchased, setPurchased] = useState(false);
  const [stamps, setStamps] = useState([]);
  const [selectedStamp, setSelectedStamp] = useState(-100);

  function convertToImageUrl(code) {
    console.log("code:", code);
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/f/${prefix}/${suffix}/image.jpg`;
  }

  const getAllStampsOfCollection = async () => {
    try {
      var collectionId = route.params.collectionId;
      console.log("collectionId:", collectionId);
      const keys = await AsyncStorage.getAllKeys();
      var temp = [];
      for (const key of keys) {
        if (key.includes("stampcolv2_" + collectionId + "_")) {
          var stampText = await AsyncStorage.getItem(key);
          var stampObj = JSON.parse(stampText);
          console.log(stampObj);
          temp.push({
            stampId: stampObj.stampId,
            images: stampObj.images,
            name: stampObj.name,
            issuedOn: stampObj.issuedOn,
            country: stampObj.country,
          });
        }
      }
      setStamps(temp);
    } catch (err) {
      console.log(err);
    }
  }

  const showDeleteAlert = async (id) => {
    var collectionId = route.params.collectionId;
    Alert.alert(
      "Delete this stamp?",
      "Are you sure you want to remove this stamp from collection?",
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await AsyncStorage.removeItem("stampcolv2_" + collectionId + "_" + id);
            await getAllStampsOfCollection();
          }
        }
      ]
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      getAllStampsOfCollection();
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
        <Text style={{ width: width / 3 * 2, fontWeight: 'bold', color: '#FFF', position: 'absolute', bottom: 16, alignSelf: 'center', fontSize: 16, textAlign: 'center' }}>{route.params.collectionName.toUpperCase() + " COLLECTION"}</Text>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>

        {stamps.map(stamp => (
          <TouchableOpacity
            style={styles.item} key={stamp.stampId}
            onPress={() => {
              navigation.navigate('Detail', { stampId: stamp.stampId })
            }}
          >
            <ImageBackground style={{ width: 80, height: 80, marginLeft: 8 }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ borderRadius: 8 }} />
            <View style={{ width: width - 180, marginLeft: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>{stamp.name.length < 50 ? stamp.name : stamp.name.substr(0, 47) + '...'}</Text>
              <Text style={{ fontSize: 14, fontSize: 12 }}>{"Issued on: " + stamp.issuedOn}</Text>
              <Text style={{ color: '#006A40', fontSize: 12 }}>{stamp.country}</Text>
            </View>

            <TouchableOpacity
              style={{ width: 36, height: 36, position: 'absolute', bottom: 8, right: 8, padding: 4, backgroundColor: '#E4D6C2', borderRadius: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
              onPress={() => {
                console.log("stampId =", stamp.stampId);
                try {
                  setSelectedStamp(stamp.stampId);
                  showDeleteAlert(stamp.stampId);
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
          </TouchableOpacity>
        ))}

        <View style={{ height: 200 }} />
      </ScrollView>
      <TouchableOpacity style={{ position: 'absolute', top: 50, left: 16 }} onPress={() => navigation.goBack()}>
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
  }
});
