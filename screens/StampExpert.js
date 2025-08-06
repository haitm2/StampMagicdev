import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, BackHandler, Dimensions, ImageBackground, Linking, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AES, IAP } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import InAppReview from 'react-native-in-app-review';

const VALUE_URL = 'https://antique-api.magicdev.fun/api/vcxHUI16aA7cznkv6z/valuingStamp';

export default function StampExpert({ navigation }) {
  const [uri, setUri] = useState(null);
  const [showAnalyz, setShowAnalyz] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState(null);
  const [isPurchased, setPurchased] = useState(false);
  const [bannerError, setBannerError] = useState(false);

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

  useFocusEffect(
    React.useCallback(() => {
      // AsyncStorage.clear().then(() => console.log("clear dataa"));
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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const initQuest = async () => {
    await sleep(1000);
    setShowColorQuest(true);
  }

  const getFinalAnswer = async (uri) => {
    console.log("Getting final answer...");
    const detectBody = new FormData();
    detectBody.append('picture_upload', {
      uri,
      name: 'card.jpg',
      type: 'image/jpeg'
    });
    const data = await fetch(VALUE_URL, {
      method: 'POST',
      body: detectBody,
    });
    console.log("Detecting...")

    const rsEncrypted = await data.text();
    console.log("DMM", rsEncrypted.substring(0, 500));
    try {
      const rsText = await AES.decrypt2(rsEncrypted);
      // console.log(rsText);
      setFinalAnswer(rsText);
      showRateDialog();
    } catch (err) {
      console.log(err);
    }
  }

  const pickImageFromGallery = async () => {
    ImagePicker.openPicker({
      width: 800,
      height: 800,
      cropping: true,
    }).then(async (image) => {
      console.log(image);
      var imageUri = Platform.OS == 'ios' ? 'file://' + image.path : image.path;
      setUri(imageUri);
      setShowAnalyz(true);
      await getFinalAnswer(imageUri);
      setShowAnalyz(false);
    });
  };

  const pickImageFromCamera = async () => {
    ImagePicker.openCamera({
      width: 800,
      height: 800,
      cropping: true,
    }).then(async (image) => {
      console.log(image);
      var imageUri = Platform.OS == 'ios' ? 'file://' + image.path : image.path;
      setUri(imageUri);
      setShowAnalyz(true);
      await getFinalAnswer(imageUri);
      setShowAnalyz(false);
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Stamp Expert</Text>
        </View>
      )
    });
  }, [navigation]);

  useEffect(() => {
    initQuest();
  }, []);

  return (
    <ImageBackground style={styles.container} source={require('../assets/onboard_bg.jpg')}>
      <ScrollView
        ref={ref => scrollView = ref}
        onContentSizeChange={() => scrollView.scrollToEnd()}
      >
        <LottieView source={require('../assets/expert.json')} autoPlay loop style={{ width: '100%', height: 100, marginTop: 50 }} />
        <View style={styles.questionBox}>
          <Text style={styles.question}>Hi, I am a stamp expert</Text>
        </View>
        {<View style={styles.questionBox}>
          <Text style={styles.question}>Send me any stamp, I will give you the information, condition and value of that stamp</Text>
        </View>}

        {!uri && <View style={styles.actionBox}>
          <TouchableOpacity style={styles.actionBtn} onPress={pickImageFromCamera}>
            <Ionicons
              name='camera' size={14}
              marginRight={8}
              color='#FFF'
            />
            <Text style={{ color: '#FFF' }}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={pickImageFromGallery}>
            <Ionicons
              name='images' size={14}
              marginRight={8}
              color='#FFF'
            />
            <Text style={{ color: '#FFF' }}>Select from photo album</Text>
          </TouchableOpacity>
        </View>}

        {bannerError || isPurchased ?
          null :
          <View style={{ width: '100%', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
            <BannerAd
              size={BannerAdSize.MEDIUM_RECTANGLE}
              unitId={__DEV__ ? TestIds.BANNER : Platform.select({
                ios: TestIds.BANNER,
                android: 'ca-app-pub-9597010572153445/5032830591',
              })}
              onAdFailedToLoad={(error) => {
                console.log(error);
                setBannerError(true);
              }}
            />
          </View>
        }

        {uri && <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View></View>
          <ImageBackground source={{ uri }} style={{ width: 200, height: 200, borderRadius: 8, margin: 8, backgroundColor: '#000' }} imageStyle={{ borderRadius: 8, resizeMode: 'contain' }} />
        </View>}

        {!finalAnswer && showAnalyz && <View style={styles.questionBox}>
          <Text style={styles.question}><ActivityIndicator />Please wait a moment, I am analyzing your stamp</Text>
        </View>}
        {finalAnswer && <View style={styles.finalAnswerBox}>
          {isPurchased || finalAnswer.length < 300 && <Text style={styles.question}>{finalAnswer.replace(/\*\*/g, '').replace(/\*/g, '•')}</Text>}
          {!isPurchased && finalAnswer.length >= 300 && <Text style={styles.question}>{finalAnswer.replace(/\*\*/g, '').replace(/\*/g, '•').substring(0, 300) + '...'}</Text>}
          {!isPurchased && finalAnswer.length >= 300 && <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={() => {
              navigation.navigate('Premium', { type: 'STAMP EXPERT -> SEE MORE ANSWER' });
            }}
          >
            <Text style={{ color: 'green', fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }}>See more →</Text>
          </TouchableOpacity>}
        </View>}

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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: { margin: 4 },
  questionBox: {
    marginTop: 8, marginLeft: 8, padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
    width: '70%',
    borderColor: '#666666',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  actionBox: {
    marginTop: 8, marginRight: 8, padding: 4,
    alignSelf: 'flex-end'
  },
  actionBtn: {
    backgroundColor: 'grey',
    padding: 16, margin: 4,
    borderRadius: 16,
    flexDirection: 'row',
    borderColor: '#666666',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  answerBox: {
    marginTop: 8, marginRight: 8, padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
    alignSelf: 'flex-end'
  },
  answer: { alignSelf: 'flex-end', margin: 4 },
  finalAnswerBox: {
    margin: 8, padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 16
  },
});
