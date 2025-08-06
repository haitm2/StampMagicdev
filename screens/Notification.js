import { ActivityIndicator, Dimensions, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { PermissionsAndroid } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authorizationStatus = await messaging().requestPermission();

  if (Platform.OS == 'android') {
    console.log('Request POST_NOTIFICATIONS permission android');
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }

  if (authorizationStatus) {
    console.log('Permission status:', authorizationStatus);
  }
}

export default function Notification({ navigation }) {
  const [loading, setLoading] = useState(true);

  const requestNotifyPermission = async () => {
    console.log(">>>>>>> requestNotifyPermission")
    await requestUserPermission();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging()
      .subscribeToTopic('stampsnap')
      .then(() => console.log('Subscribed to topic!'));
  }

  useEffect(() => {
    setLoading(true);
    console.log("start loading...")
    sleep(2000).then(async () => {
      requestNotifyPermission();
      setLoading(false);
    })
  }, []);

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let continueClick = async () => {
    await AsyncStorage.setItem("skip", "1")
    navigation.reset({
      index: 0,
      routes: [{ name: Platform.OS == 'android' ? 'StampId' : 'ATT' }]
    });
  }

  return (

    <ImageBackground source={require('../assets/bg_inapp.webp')} style={styles.container}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <ImageBackground style={{ alignSelf: 'center', width: width * 0.8, height: width * 0.8, marginTop: 100 }} source={require('../assets/noti.png')} imageStyle={{ resizeMode: 'contain' }} />
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 16 }}>Allow Push Notifications</Text>
        <Text style={{ color: '#FFF', margin: 16, textAlign: 'center', fontSize: 12 }}>Without this, Stamp Identifier can’t notify you when new rare stamps are discovered or added.</Text>

        {loading ? <ActivityIndicator color={'#00A362'} size={'large'} /> : <TouchableOpacity onPress={continueClick} style={styles.actionBtn}>
          <Text style={{ textAlign: 'center', margin: 16, color: '#FFF', fontWeight: 'bold', fontSize: 18 }} >Continue</Text>
        </TouchableOpacity>}
        <View style={{ height: 100 }} />
      </ScrollView>

    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', height: '100%', backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center'
  },
  actionBtn: {
    alignSelf: 'center',
    backgroundColor: '#00A362',
    borderRadius: 8,
    width: width - 32,
    alignItems: 'center',
    marginTop: 16
  }
});
