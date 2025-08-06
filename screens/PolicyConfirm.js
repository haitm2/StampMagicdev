import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  Animated,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PolicyConfirm({ navigation }) {
  const iconOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const [showBottom, setShowBottom] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(iconOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Chỉ hiển thị phần dưới sau animation
      setShowBottom(true);
    });
  }, []);

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.warn('Failed to open URL:', err));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground source={require('../assets/onboard_bg.jpg')} style={styles.container}>
        <View style={styles.topContent}>
          <Animated.Image
            source={require('../assets/icon.png')}
            style={[styles.icon, { opacity: iconOpacity }]}
            resizeMode="contain"
          />
          <Animated.View style={{ opacity: textOpacity, alignItems: 'center' }}>
            <Text style={styles.title}>Welcome to Stamp Identifier</Text>
            <Text style={styles.subtitle}>Your guide to the world of Stamps</Text>
          </Animated.View>
        </View>

        <View style={{ width: '100%', alignItems: 'center', marginBottom: 16, marginTop: 16 }}>
          <BannerAd
            size={BannerAdSize.MEDIUM_RECTANGLE}
            unitId={__DEV__ ? TestIds.BANNER : Platform.select({
              ios: TestIds.BANNER,
              android: 'ca-app-pub-9597010572153445/5393451925',
            })}
            onAdFailedToLoad={(error) => {
              console.log(error);
            }}
          />
        </View>

        {showBottom && (
          <View style={{ alignItems: 'center', paddingBottom: 16 + insets.bottom }}>
            <Pressable style={styles.button} onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Walkthrough' }],
              });
            }}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            <Text style={styles.agreeText}>
              By proceeding, you agree to our{' '}
              <Text style={styles.link} onPress={() => openURL('https://stampidentifierai.com/terms')}>
                Terms of Use
              </Text>,{' '}
              <Text style={styles.link} onPress={() => openURL('https://stampidentifierai.com/privacy')}>
                Privacy Policy
              </Text> and{' '}
              <Text style={styles.link} onPress={() => openURL('https://stampidentifierai.com/disclaimer')}>
                Disclaimer
              </Text>.
            </Text>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  topContent: {
    alignItems: 'center',
    marginTop: 60,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 15,
    color: '#DDD',
    marginTop: 6,
  },
  button: {
    backgroundColor: '#00FF87',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  agreeText: {
    fontSize: 13,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 18,
  },
  link: {
    color: '#00FF87',
    textDecorationLine: 'underline',
  },
});