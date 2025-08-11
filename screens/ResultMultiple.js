import { useCameraPermissions, CameraView } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, BackHandler, Button, Dimensions, Image, ImageBackground, Linking, PixelRatio, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AES, IAP } from '../utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InAppReview from 'react-native-in-app-review';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import LottieView from 'lottie-react-native';
import { set } from 'lodash';

const width = Dimensions.get('window').width;

export default function ResultMultiple({ route }) {
  const navigation = useNavigation();
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const [stamps, setStamps] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [showInstruction, setShowInstruction] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("hideMultiInstruction").then(result => {
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

  const pickImageFromGallery = async () => {
    // await AsyncStorage.clear();

    ImagePicker.openPicker({
      compressImageMaxWidth: 1024,
      cropping: true,
    }).then(async (image) => {
      console.log(image);
      setImagePath(Platform.OS == 'ios' ? 'file://' + image.path : image.path);

      try {
        const detectBody = new FormData();
        detectBody.append('picture_upload', {
          uri: Platform.OS == 'ios' ? 'file://' + image.path : image.path,
          name: 'stamp.jpg',
          type: 'image/jpeg'
        });

        // console.log(JSON.stringify(detectBody));
        const data = await fetch('https://stampsnap.stampidentifierai.com/api/v2/detectMultipleStamp', {
          method: 'POST',
          body: detectBody,
        });
        console.log("Detecting....")

        const jsonRsText = await data.text();
        var dataDecrypted = await AES.decrypt(jsonRsText);
        var jsonRs = JSON.parse(dataDecrypted);
        // console.log(JSON.stringify(jsonRs));
        var newResults = [];
        for (var st of jsonRs) {
          var convertedCoord = JSON.stringify(convertToSquareCoords(st.coords, image.width, image.height, 80));
          console.log(convertedCoord);
          set(st, 'convertedCoord', JSON.parse(convertedCoord));
          newResults.push(st);
        }
        setStamps(newResults);
        // console.log(JSON.stringify(newResults));
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
          await AsyncStorage.setItem("scannedMulti", "1");
          showRateDialog();
        }
      } catch (err) {
        console.log("error: ", err);
      }
    });


  };

  const pickImageFromCamera = async () => {
    // await AsyncStorage.clear();

    ImagePicker.openCamera({
      compressImageMaxWidth: 1024,
      cropping: true,
    }).then(async (image) => {
      console.log(image);
      setImagePath(Platform.OS == 'ios' ? 'file://' + image.path : image.path);

      try {
        const detectBody = new FormData();
        detectBody.append('picture_upload', {
          uri: Platform.OS == 'ios' ? 'file://' + image.path : image.path,
          name: 'stamp.jpg',
          type: 'image/jpeg'
        });

        // console.log(JSON.stringify(detectBody));
        const data = await fetch('https://stampsnap.stampidentifierai.com/api/v2/detectMultipleStamp', {
          method: 'POST',
          body: detectBody,
        });
        console.log("Detecting....")

        const jsonRsText = await data.text();
        var dataDecrypted = await AES.decrypt(jsonRsText);
        var jsonRs = JSON.parse(dataDecrypted);
        // console.log(JSON.stringify(jsonRs));
        var newResults = [];
        for (var st of jsonRs) {
          var convertedCoord = JSON.stringify(convertToSquareCoords(st.coords, image.width, image.height, 80));
          console.log(convertedCoord);
          set(st, 'convertedCoord', JSON.parse(convertedCoord));
          newResults.push(st);
        }
        setStamps(newResults);
        // console.log(JSON.stringify(newResults));
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
          showRateDialog();
        }
      } catch (err) {
        console.log("error: ", err);
      }
    });


  };

  const insets = useSafeAreaInsets();

  function convertToImageUrl(code) {
    console.log("code:", code);
    const str = code.toString();
    const prefix = str.slice(0, -3); // lấy tất cả trừ 3 số cuối
    const suffix = str.slice(-3);    // lấy 3 số cuối
    return `https://i.colnect.net/f/${prefix}/${suffix}/image.jpg`;
  }

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

  return (
    <ImageBackground source={require('../assets/bg_screen.webp')} style={styles.container}>
      <StatusBar
        backgroundColor="#303234"
        barStyle="light-content"
      />

      <Text style={{ color: '#DDDDDD', width: width - 32, alignSelf: 'center', marginTop: insets.top + 100, fontStyle: 'italic', fontSize: 10 }}>Due to current system limitations, the application can only recognize 5 stamps at a time. In the future, we will upgrade to recognize as many stamps at the same time as possible.</Text>

      <Text></Text>

      {imagePath && stamps.length == 0 && <ImageBackground style={{ alignSelf: 'center', width: width * 0.4, height: width * 0.4, alignItems: 'center', justifyContent: 'center' }} imageStyle={{ resizeMode: 'contain' }} source={{ uri: imagePath }}>
        <ActivityIndicator size={'large'} color={'#FFF'} />
      </ImageBackground>}

      {imagePath && stamps.length == 0 && <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 16, fontWeight: '500', margin: 16, textAlign: 'center' }}>Identifying stamps, please wait...</Text>}

      {!imagePath && <TouchableOpacity
        style={{ borderRadius: 16, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: width - 32, padding: 16, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        onPress={pickImageFromCamera}
      >
        <Ionicons
          name='camera-outline' size={32}
          color='#000'
        />
        <Text style={{ marginLeft: 16 }}>Take pictures of stamps</Text>
      </TouchableOpacity>}
      {!imagePath && <TouchableOpacity
        style={{ borderRadius: 16, flexDirection: 'row', marginTop: 16, alignItems: 'center', alignSelf: 'center', width: width - 32, padding: 16, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        onPress={pickImageFromGallery}
      >
        <Ionicons
          name='images-outline' size={32}
          color='#000'
        />
        <Text style={{ marginLeft: 16 }}>Choose from the photo library</Text>
      </TouchableOpacity>}

      <ScrollView>
        {bannerError || isPurchased ?
          null :
          <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
            <BannerAd
              size={stamps.length > 0 ? BannerAdSize.ANCHORED_ADAPTIVE_BANNER : BannerAdSize.MEDIUM_RECTANGLE}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: 'ca-app-pub-1354543839348242/8706170074',
                android: 'ca-app-pub-9597010572153445/1088374822',
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
            style={styles.item} key={stamp.stampId + stamp.coords}
            onPress={() => {
              navigation.navigate('Detail', { stampId: stamp.stampId })
            }}
          >
            <ImageBackground style={{ width: 80, height: 80, marginLeft: 8 }} source={{ uri: imagePath }} imageStyle={{ resizeMode: 'contain', borderRadius: 8 }}>
              {stamp.convertedCoord && <View style={{ position: 'absolute', borderWidth: 1, borderColor: 'yellow', top: stamp.convertedCoord.y0, left: stamp.convertedCoord.x0, width: stamp.convertedCoord.x1 - stamp.convertedCoord.x0, height: stamp.convertedCoord.y1 - stamp.convertedCoord.y0 }} />}
              {stamp.convertedCoord && <View style={{
                position: 'absolute', width: 80, height: 2, backgroundColor: '#000',
                top: Math.round(stamp.convertedCoord.y0 + (stamp.convertedCoord.y1 - stamp.convertedCoord.y0) / 2),
                left: Math.round(stamp.convertedCoord.x0 + (stamp.convertedCoord.x1 - stamp.convertedCoord.x0) / 2),
              }} />}
            </ImageBackground>
            <ImageBackground style={{ width: 80, height: 80, marginLeft: 8 }} source={{ uri: convertToImageUrl(stamp.images[0]) }} imageStyle={{ resizeMode: 'contain', borderRadius: 8 }} />
            <View style={{ width: width - 240, marginLeft: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>{stamp.name.length < 50 ? stamp.name : stamp.name.substr(0, 47) + '...'}</Text>
              <Text style={{ fontSize: 14, fontSize: 12 }}>{"Issued on: " + stamp.issuedOn}</Text>
              <Text style={{ color: '#006A40', fontSize: 12 }}>{stamp.country}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={{ position: 'absolute', top: 50, left: 16 }} onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StampId' }]
        });
      }}>
        <ImageBackground source={require('../assets/back_detail_button.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>

      {showInstruction && <View style={{ width: '100%', height: '100%', backgroundColor: '#000', position: 'absolute', top: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', margin: 16, color: '#FFF', textAlign: 'center', fontSize: 10 }}>{"If you need to identify multiple stamps at once, line them up and start scanning. Make sure they are aligned and oriented correctly."}</Text>
        <ImageBackground style={{ width: width, height: width * 5 / 4 }} source={require('../assets/multiplescan.gif')} />
        <TouchableOpacity
          style={{ padding: 16, borderRadius: 24, margin: 16, backgroundColor: '#80CBC4' }}
          onPress={async () => {
            setShowInstruction(false);
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>  Start scanning  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => {
          await AsyncStorage.setItem("hideMultiInstruction", "1");
          setShowInstruction(false);
        }}>
          <Text style={{ fontWeight: 'bold', margin: 16, color: '#FFF', textDecorationLine: 'underline' }}>Do not show this guide again</Text>
        </TouchableOpacity>
      </View>}
    </ImageBackground>
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
