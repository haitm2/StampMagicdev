import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, Image, ImageBackground, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { IAP } from '../utils';

export default function Camera() {
  const navigation = useNavigation();
  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [showGuide, setShowGuide] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [showInstruction, setShowInstruction] = useState(true);
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  const insets = useSafeAreaInsets();

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
    const backAction = () => {
      if (navigation.isFocused()) {
        console.log("Press back");
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("hideInstruction").then(result => {
        if (result == "1") {
          setShowInstruction(false);
        }
      });
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Camera</Text>
        </View>
      )
    });
  }, [navigation]);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={{ width: width, height: height + 100, alignItems: 'center' }} source={require('../assets/bg_inapp.webp')} imageStyle={{ resizeMode: 'cover' }}>
          <StatusBar
            backgroundColor="#000"
            barStyle="light-content"
          />

          <ImageBackground source={require('../assets/cam_permission.png')} style={{ width: 250, height: 250, margin: 8, marginTop: 100 }} />
          <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#fff', marginTop: 16, fontSize: 16 }}>Let us access your camera</Text>
          <Text style={{ textAlign: 'center', margin: 8, color: '#fff' }}>{"We need access to your camera to take a photo\nand help you identify the stamp."}</Text>
          <TouchableOpacity onPress={requestPermission} style={styles.continueBtn}>
            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }} >{"Continue"}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }

  async function captureImage() {
    if (camera) {
      setShowBar(false);
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      // setImageUri(data.uri);
      var w = data.width;
      var h = data.height;
      console.log("Img width =", w)
      console.log("Img height =", h);
      var inputImage = null;

      if (w < h) {
        inputImage = await manipulateAsync(
          data.uri,
          [
            { resize: { width: 1024 } },
            {
              crop: {
                width: 1024,
                height: 1024,
                originX: 0,
                originY: 512 * h / w - 512
              }
            },
            {
              crop: {
                width: 512,
                height: 512,
                originX: 256,
                originY: 256
              }
            },

          ],
          { compress: 1, format: SaveFormat.JPEG }
        );
      } else {
        inputImage = await manipulateAsync(
          data.uri,
          [
            { resize: { height: 1024 } },
            {
              crop: {
                width: 1024,
                height: 1024,
                originX: 512 * w / h - 512,
                originY: 0
              }
            },
            {
              crop: {
                width: 512,
                height: 512,
                originX: 256,
                originY: 256
              }
            },
          ],
          { compress: 1, format: SaveFormat.JPEG }
        );
      }

      // navigation.navigate('Result', { uri: inputImage.uri })
      var id = "detect_" + new Date().getTime() + '';
      setShowBar(true);
      // navigation.navigate('Result', { type: 'detect', id, image: inputImage.uri })
      navigation.navigate('Result', { image: inputImage.uri, width: 512, height: 512 })
    }
  }

  const pickImageFromGallery = async () => {
    // await AsyncStorage.clear();

    ImagePicker.openPicker({
      compressImageMaxWidth: 1024,
      cropping: true,
    }).then(async (image) => {
      console.log(image);

      // navigation.navigate('Result', { uri: Platform.OS == 'ios' ? 'file://' + image.path : image.path })
      var id = "detect_" + new Date().getTime() + '';
      // navigation.navigate('Result', { type: 'detect', id, image: Platform.OS == 'ios' ? 'file://' + image.path : image.path })
      navigation.navigate('Result', { image: Platform.OS == 'ios' ? 'file://' + image.path : image.path, width: image.width, height: image.height })
    });


  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      {!isPurchased && <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 16, top: insets.top + 16, width: width - 32, borderRadius: 16, backgroundColor: '#6D4C41' }}
        onPress={() => {
          navigation.navigate('Offer', { type: 'HOME IAP BANNER' });
        }}
      >
        <View style={{ width: width - 150, margin: 16 }}>
          <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Free Premium Available</Text>
          <Text style={{ fontSize: 10, color: '#FFF' }}>Tap to claim.</Text>
        </View>
        <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 8, margin: 16 }}>
          <Ionicons
            name='mail-unread' size={28}
            color='#E64A19'
          />
        </View>
      </TouchableOpacity>}
      <CameraView autofocus={true} ref={(ref) => setCamera(ref)} style={[styles.camera, { position: 'absolute', bottom: 166 + insets.bottom, width: width * 0.9, height: width * 4 / 3 * 0.9 }]} facing={'back'} mute={true} mode='picture'>
        <ImageBackground source={require('../assets/camera_frame_2.png')} style={{ width: '100%', height: '100%' }} imageStyle={{ resizeMode: 'contain' }}>
          <View style={{ position: 'absolute', bottom: 20, width: 300, borderRadius: 8, padding: 4, alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <Text style={{ color: '#FFF', fontSize: 10, textAlign: 'center' }}>{"Place your stamp correctly oriented and fully within the frame above for best identification results."}</Text>
          </View>
        </ImageBackground>
        {<TouchableOpacity style={{ position: 'absolute', top: 8, right: 8, padding: 8 }}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'StampId' }]
            });
          }}
        >
          <Ionicons
            name='close-outline' size={32}
            color='#FFF'
          />
        </TouchableOpacity>}
      </CameraView>

      {showBar && <View style={{ flexDirection: 'row', height: 150, backgroundColor: '#FFF', alignSelf: 'center', position: 'absolute', bottom: insets.bottom, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ width: width / 2 - 46, alignItems: 'center', justifyContent: 'center' }}
          onPress={pickImageFromGallery}
        >
          <ImageBackground source={require('../assets/gallery.png')} style={{ width: 20, height: 20 }} />
          <Text style={{ fontSize: 12, marginTop: 4 }}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={captureImage}>
          <ImageBackground source={require('../assets/capture.png')} style={{ width: 60, height: 60, marginLeft: 16, marginRight: 16 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: width / 2 - 46, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => setShowGuide(prevState => !prevState)}
        >
          <ImageBackground source={require('../assets/specifications.png')} style={{ width: 20, height: 20 }} />
          <Text style={{ fontSize: 12, marginTop: 4 }}>Snap tips</Text>
        </TouchableOpacity>
        {showGuide && <View style={styles.guide}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Snap tips</Text>
          <View style={{ flexDirection: 'row', marginTop: 34, padding: 8 }}>
            <ImageBackground style={{ width: 40, height: 40, marginRight: 8 }} source={require('../assets/camtips/tip_num_1.png')} />
            <View>
              <Text>Place your stamp correctly oriented and fully within the camera frame</Text>
              <ImageBackground style={{ width: 128, height: 125, marginTop: 8 }} source={require('../assets/camtips/tip_good.png')} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <ImageBackground style={{ width: 40, height: 40, marginRight: 8 }} source={require('../assets/camtips/tip_num_1.png')} />
            <View>
              <Text>Make sure the stamp is not too blurry and too dark</Text>
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <View>
                  <ImageBackground style={{ width: 70, height: 80 }} source={require('../assets/camtips/tip_dark.png')} />
                  <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10 }}>{"Too dark"}</Text>
                </View>
                <View>
                  <ImageBackground style={{ width: 70, height: 80 }} source={require('../assets/camtips/tip_dark.png')} />
                  <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10 }}>{"Too blurry"}</Text>
                </View>
                <View>
                  <ImageBackground style={{ width: 70, height: 80 }} source={require('../assets/camtips/tip_dark.png')} />
                  <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10 }}>{"Multiple\nstamps"}</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{ position: 'absolute', top: 16, left: 16 }} onPress={() => setShowGuide(false)}>
            <Ionicons
              name='close-outline' size={32}
              color='#000'
            />
          </TouchableOpacity>
        </View>}
      </View>}
      {showInstruction && <View style={{ width: '100%', height: '100%', backgroundColor: '#000', position: 'absolute', top: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', margin: 16, color: '#FFF', textAlign: 'center', fontSize: 10 }}>{"Instructions for taking photos of your stamps\nMake sure the stamp is properly oriented and clear."}</Text>
        <ImageBackground style={{ width: width, height: width }} source={require('../assets/guide.gif')} />
        <TouchableOpacity
          style={{ padding: 16, borderRadius: 24, margin: 16, backgroundColor: '#80CBC4' }}
          onPress={async () => {
            setShowInstruction(false);
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>  Start scanning  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => {
          await AsyncStorage.setItem("hideInstruction", "1");
          setShowInstruction(false);
        }}>
          <Text style={{ fontWeight: 'bold', margin: 16, color: '#FFF', textDecorationLine: 'underline' }}>Do not show this guide again</Text>
        </TouchableOpacity>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  camera: {
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    marginTop: 8,
    borderColor: '#FFF',
    borderWidth: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  continueBtn: {
    width: width - 32,
    backgroundColor: '#00A362', borderRadius: 16, height: 50, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1,
    margin: 16,
    borderColor: '#37D9BE',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  guide: {
    width: 300, position: 'absolute', alignSelf: 'center', bottom: 50, backgroundColor: '#FFF', borderRadius: 16, alignItems: 'center', justifyContent: 'center', padding: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  }
});
