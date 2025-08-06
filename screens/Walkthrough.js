import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InAppReview from 'react-native-in-app-review';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
  {
    image: require('../assets/onboard/onboard_0.jpg'),
    key: '0',
    title: 'Identify stamp instanly',
    subTitle: 'Accrately identify stamps via\ncaptured or uploaded images',
  },
  {
    image: require('../assets/onboard/onboard_1.jpg'),
    key: '1',
    title: 'Explore 1,400,000 Stamps',
    subTitle: 'In-depth info for 1,400,000 stamps\nfrom 200+ countries and regions',
  },
  {
    image: require('../assets/onboard/onboard_2.jpg'),
    key: '2',
    title: 'Easily manage your collection',
    subTitle: 'You can add to your favorite collection after identifying or searching for stamps in the app.',
  },
  {
    image: require('../assets/onboard/onboard_3.jpg'),
    key: '3',
    title: 'Quick stamp search',
    subTitle: 'Just select the country and type the keyword you want to search, the results will be returned immediately',
  },
  {
    image: require('../assets/onboard/onboard_4.jpg'),
    key: '4',
    title: 'In-depth research with a stamp expert',
    subTitle: 'Our stamp experts have a wealth of knowledge and can help you value any stamp.',
  },


];

export default function Walkthrough({ navigation }) {

  const insets = useSafeAreaInsets();


  return (
    <View style={{ flex: 1, flexDirection: 'column-reverse', backgroundColor: '#00796B' }}>
      <StatusBar translucent backgroundColor="#000" />
      <View style={{ width: '100%', height: '100%' }}>
        <AppIntroSlider
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground
                  source={item.image}
                  key={item.key}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000'
                  }}
                  imageStyle={{ resizeMode: 'contain' }}>
                  <View style={{ width: width, height: 200, position: 'absolute', alignSelf: 'center', backgroundColor: '#00796B', bottom: 0, alignItems: 'center', borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                    <Text style={{ width: width - 32, alignSelf: 'center', textAlign: 'center', color: '#FFF', marginTop: 32, fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ width: width - 32, alignSelf: 'center', textAlign: 'center', color: '#FFF', marginTop: 16 }}>{item.subTitle}</Text>
                  </View>
                </ImageBackground>
              </View>
            );
          }}
          data={data}
          onDone={async () => {
            await AsyncStorage.setItem("skip", '1');
            console.log('Move to Language select');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Notification' }]
            });

          }}
          onSkip={async () => {
            await AsyncStorage.setItem("skip", '1');
            console.log('Move to Language select');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Notification' }]
            });

          }}
          dotStyle={{ backgroundColor: '#004D40' }}
          renderDoneButton={() => {
            return (
              <View style={styles.buttonCircle}>
                <Icon
                  name="checkmark"
                  color="#00695C"
                  size={24}
                />
              </View>
            );
          }}
          renderNextButton={() => {
            return (
              <View style={styles.buttonCircle}>
                <Icon
                  name="arrow-forward"
                  color="#00695C"
                  size={24}
                />
              </View>
            );
          }}
        />
        <View style={{ width: '100%', alignItems: 'center', marginBottom: insets.bottom + 16 }}>
          <BannerAd
            size={BannerAdSize.MEDIUM_RECTANGLE}
            unitId={__DEV__ ? TestIds.BANNER : Platform.select({
              ios: TestIds.BANNER,
              android: 'ca-app-pub-9597010572153445/2593028188',
            })}
            onAdFailedToLoad={(error) => {
              console.log(error);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
  },
  image: {
    width: 320,
    height: 320,
    marginTop: 32,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#EFEBE9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nativeadView: {
    padding: 12, borderRadius: 16,
    borderWidth: 1, borderColor: '#333333'
  },
});
