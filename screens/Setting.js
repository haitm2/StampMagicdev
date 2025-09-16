import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, Image, ImageBackground, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InAppReview from 'react-native-in-app-review';
import { IAP } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import TypewriterText from '../components/TypeWriterText';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Setting({ navigation }) {
  const [isPurchased, setPurchased] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const insets = useSafeAreaInsets();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setShowLoading(true);
    console.log("start loading...")
    sleep(500).then(async () => {
      setShowLoading(false);
      showRateDialog();
    })
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      IAP.isPurchased().then(result => {
        console.log("isPurchased =", result);
        setPurchased(result)
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <ImageBackground
        style={{ width: width, height: Math.round(width * 1015 / 2048) }}
        source={require('../assets/collection_banner.png')}
        imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.settingSubView}>
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: 'bold', color: '#00796B' }}>Manage membership</Text>
            <TouchableOpacity
              style={{ flexDirection: 'row', paddingTop: 8 }}
              onPress={() => {
                if (isPurchased) {
                  alert("You have paid, now you can use all the features of the app without any limitations.")
                } else {
                  navigation.navigate('Premium', { type: "SETTING - CLICK MEMBERSHIP BUTTON" });
                }
              }}
            >
              <Ionicons name="gift-outline" color='#000000' size={20} />
              <View style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>My Premium Service</Text>
                <Text style={{ fontSize: 12 }}>{isPurchased ? "Membership status: PREMIUM" : "Membership status: FREE"}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: 'center', width: '90%', height: 1, backgroundColor: '#CFD8DC' }} />

          <Text style={{ fontWeight: 'bold', color: '#00796B', marginLeft: 16, marginTop: 16 }}>Support</Text>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://www.facebook.com/stamp.value')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="lock-closed-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Contact support</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://stampidentifierai.com/')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="globe-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Website</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://www.facebook.com/stamp.value')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="logo-facebook" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Community</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>

          <View style={{ alignSelf: 'center', width: '90%', height: 1, backgroundColor: '#CFD8DC' }} />

          

          <Text style={{ fontWeight: 'bold', color: '#00796B', marginLeft: 16, marginTop: 16 }}>Legal</Text>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => Linking.openURL('https://stampidentifierai.com/privacy')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="lock-closed-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Privacy policy</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://stampidentifierai.com/terms');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="document-text-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Terms of use</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moreItem}
            onPress={() => {
              Linking.openURL('https://stampidentifierai.com/disclaimer');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="book-outline" color='#000000' size={20} />
              <Text style={{ marginLeft: 20 }}>Disclaimer</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color='#000000' size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>

      {!isPurchased && isShowLoading && <View style={{ width: width, height: height, position: 'absolute', top: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
          <LottieView source={require('../assets/loadding.json')} autoPlay loop style={{ width: '200%', height: '200%' }} />
        </View>
      </View>}

      {
        !isPurchased && <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 16, bottom: insets.bottom + 16, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
          onPress={() => {
            navigation.navigate('Premium', { type: 'SETTING IAP BANNER' });
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
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  moreItem: {
    flexDirection: 'row', padding: 15, justifyContent: 'space-between',
  },
  settingSubView: {
    margin: 10,
    marginTop: 16,
    alignSelf: 'center', width: width - 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  chatbox: {
    borderWidth: 1, borderRadius: 20, marginTop: 24, height: 40, borderColor: '#FFF',
    // paddingLeft: 16,
    borderRadius: 32,
    // paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
