import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BannerAd, BannerAdSize, NativeAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { IAP } from '../utils';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

export default function Article({ navigation, route }) {
  const [isPurchased, setPurchased] = useState(false);
  const insets = useSafeAreaInsets();

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

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#EFEFEF"
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={route.params.image} style={{ width: width, height: Platform.isPad ? width / 2 : width / 3 * 2 }} imageStyle={{ resizeMode: 'cover' }} />
        <View style={{ marginTop: -16, borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: '#F5F5F5' }}>
          <Text
            style={{
              marginTop: 8,
              marginBottom: 8,
              marginLeft: 16,
              marginRight: 16,
              fontSize: 20,
              marginTop: 16,
              fontWeight: 'bold'
            }}
          >{route.params.contents[0].text}</Text>

          {route.params.contents.slice(1, 5).map(content => (
            <View key={content.text.substring(0, 100)}>
              {(content.type == 'title' || content.type == 'normal') && <Text
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  fontSize: content.type == 'title' ? 16 : null,
                  fontWeight: content.type == 'title' ? 'bold' : null,
                  marginLeft: 16,
                  marginRight: 16,
                }}>
                {content.text}
              </Text>}
              {content.type == 'image' && <ImageBackground source={{ uri: content.text }} style={{ width: width, height: width * 0.5, alignSelf: 'center' }} imageStyle={{ resizeMode: 'contain' }} />}
            </View>
          ))}

          {
            !isPurchased && <TouchableOpacity
              style={{ margin: 16, width: width - 32, borderRadius: 16, backgroundColor: '#000' }}
              onPress={async () => {
                var lastType = "ARTICLE IAP BANNER";
                navigation.navigate('Premium', { type: lastType });
              }}
            >
              <ImageBackground source={require('../assets/premium_stamp.png')} style={{ position: 'absolute', bottom: 0, right: 0, width: width - 32, height: Math.round((width - 32) * 510 / 2048) }} imageStyle={{ resizeMode: 'contain' }} />
              <View style={{ width: width - 150, margin: 16 }}>
                <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Upgrade to Premium</Text>
                <Text style={{ fontSize: 10, color: '#FFF' }}>Use the app without limits — no ads, no scan restrictions.</Text>
              </View>
            </TouchableOpacity>
          }

          {route.params.contents.slice(5).map(content => (
            <View key={content.text.substring(0, 100)}>
              {(content.type == 'title' || content.type == 'normal') && <Text
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  fontSize: content.type == 'title' ? 16 : null,
                  fontWeight: content.type == 'title' ? 'bold' : null,
                  marginLeft: 16,
                  marginRight: 16,
                }}>
                {content.text}
              </Text>}
              {content.type == 'image' && <ImageBackground source={{ uri: content.text }} style={{ width: width, height: width * 0.5, alignSelf: 'center' }} imageStyle={{ resizeMode: 'contain' }} />}
            </View>
          ))}
        </View>

        <View style={{ height: 200 }} />
      </ScrollView>

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
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  nativeadView: {
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#B0BEC5',
    borderBottomColor: '#B0BEC5',
  },
  nativeadActionBtn: {
    backgroundColor: '#F76D1F', marginTop: 8, borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 8,
    borderWidth: 2,
    borderTopColor: '#f7a577',
    borderLeftColor: '#f7a577',
    borderBottomColor: '#ad4205',
    borderRightColor: '#ad4205',
  },
  premiumBanner: {
    borderRadius: 16, marginBottom: 16, marginTop: 16, width: width - 32, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between',
    padding: 16,
    borderWidth: 2,
    backgroundColor: 'rgba(219, 85, 11, 0.3)',
    borderTopColor: '#805855',
    borderLeftColor: '#805855',
    borderBottomColor: '#211312',
    borderRightColor: '#211312',
  },
  goPremiumBtn: {
    width: width / 2, alignItems: 'center',
    borderRadius: 8, padding: 8, paddingLeft: 8, marginBottom: 8,
    backgroundColor: '#F76D1F',
    borderWidth: 2,
    borderTopColor: '#f7a577',
    borderLeftColor: '#f7a577',
    borderBottomColor: '#ad4205',
    borderRightColor: '#ad4205',
  }
});
