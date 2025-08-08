import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Dimensions, Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { MainNavigator, CameraNavigator, CollectionNavigator } from '../CustomNavigation';
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { IAP } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const MAX_SCAN_PER_DAY = 3;

export default function StampId() {

    const [isPurchased, setPurchased] = useState(false);
    const insets = useSafeAreaInsets();

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

    const getTodayString = () => {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0'); // tháng bắt đầu từ 0
        const dd = String(now.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const checkDailyScanLimit = async () => {
        try {
            console.log("checkDailyScanLimit...");
            const today = getTodayString();
            const raw = await AsyncStorage.getItem('dailyScan');
            console.log(">>>>>>>>>>>> raw", raw);
            if (!raw) return true;

            const data = JSON.parse(raw);
            if (data.date === today && data.count >= MAX_SCAN_PER_DAY) {
                return false
            } else {
                return true;
            }
        } catch (e) {
            console.error('Lỗi kiểm tra scan limit', e);
            return true;
        }
    };

    return (
        // <NavigationContainer>

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    height: 60,
                    position: 'absolute',
                    width: width - 16,
                    bottom: insets.bottom + 16,
                    marginLeft: 8,
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderColor: '#CCCCCC'
                },
                // tabBarActiveBackgroundColor: '#fff'
            }}
        >
            <Tab.Screen
                name="MainTab" component={MainNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: width / 2 - 64, marginLeft: 32, height: 60, marginTop: Platform.isPad ? 0 : 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/home.png') : require('../assets/tabbar/home_0.png')} />
                            </View>
                        );
                    }
                }}
            />

            <Tab.Screen
                name="SnapTab" component={CameraNavigator}
                options={{
                    title: "Snap",
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground source={require('../assets/capture.png')} style={{ width: 60, height: 60 }} />
                            </View>
                        );
                    }
                }}
                listeners={({ navigation }) => ({
                    tabPress: async (e) => {
                        // Prevent default action
                        e.preventDefault();
                        var canScan = await checkDailyScanLimit();
                        if (canScan || isPurchased) {
                            navigation.navigate('Camera');
                        } else {
                            Alert.alert(
                                'Limit today',
                                'You have scanned all ' + MAX_SCAN_PER_DAY + ' times today. Come back tomorrow! Or try to register the Premium package now!',
                                [
                                    {
                                        text: 'Register the Premium package',
                                        onPress: () => {
                                            navigation.navigate('Premium', { type: 'CAPTURE BUTTON -> LIMIT TODAY ALERT' });
                                        }
                                    },
                                    {
                                        text: 'Ok, I\'ll be back tomorrow.',
                                    },
                                ]
                            );
                        }
                    },
                })}
            />
            <Tab.Screen
                name="CollectionTab" component={CollectionNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: width / 2 - 64, marginRight: 32, height: 60, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/collection.png') : require('../assets/tabbar/collection_0.png')} />
                            </View>
                        );
                    }
                }}
            />
        </Tab.Navigator>

    );
}
