import { ActivityIndicator, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  requestTrackingPermissionsAsync
} from 'expo-tracking-transparency';

export default function ATT({ navigation }) {

  let requestATT = async () => {
    // await AsyncStorage.clear();
    // if (isShowATT) {
    console.log("Requesting ATT");
    try {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === 'granted') {
        console.log('Yay! I have user permission to track data');
      } else {
        console.log("ATT status =", status);
      }
    } catch (err) {
      console.log("ATT error:", err);
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'StampId' }]
    });
  }

  return (
    <ImageBackground source={require('../assets/splash_bg.jpg')} style={{ width: '100%', height: '100%', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ margin: 16, textAlign: 'center', color: '#F1F8E9', fontSize: 18, fontWeight: 'bold' }}>Our app want to free for you</Text>
      <Text style={{ margin: 16, textAlign: 'center', color: '#F1F8E9', fontSize: 14, fontStyle: 'italic' }}>{'Ads help support our bussiness. Tap \"Allow\" on the dialog to give permission to show ads that are more relevant to you.'}</Text>
      <ImageBackground style={{ alignSelf: 'center', width: 300, height: 200, margin: 16 }} source={require('../assets/att.png')} />
      <TouchableOpacity onPress={requestATT} style={{ width: '50%', backgroundColor: 'orange', borderRadius: 16 }}>
        <Text style={{ textAlign: 'center', margin: 16, color: '#000', fontWeight: 'bold', fontSize: 18 }} >Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
