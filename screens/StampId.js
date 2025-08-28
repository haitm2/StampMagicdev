import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Dimensions, Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { MainNavigator, CameraNavigator, CollectionNavigator, DiscoveryNavigator, SettingNavigator } from '../CustomNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const MAX_SCAN_PER_DAY = 3;

export default function StampId() {

    const insets = useSafeAreaInsets();

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
                            <View style={{ width: width / 4 - 32, marginLeft: 8, height: 60, marginTop: Platform.isPad ? 0 : 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/home.png') : require('../assets/tabbar/home_0.png')} />
                            </View>
                        );
                    }
                }}
            />

            <Tab.Screen
                name="CollectionTab" component={CollectionNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: width / 4 - 32, marginLeft: 8, height: 60, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/collection.png') : require('../assets/tabbar/collection_0.png')} />
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
                        navigation.navigate('Camera');
                    },
                })}
            />

            <Tab.Screen
                name="DiscoveryTab" component={DiscoveryNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: width / 4 - 32, marginRight: 8, height: 60, marginTop: Platform.isPad ? 0 : 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/discovery.png') : require('../assets/tabbar/discovery_0.png')} />
                            </View>
                        );
                    }
                }}
            />

            <Tab.Screen
                name="SettingTab" component={SettingNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ width: width / 4 - 32, marginRight: 8, height: 60, marginTop: Platform.isPad ? 0 : 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/setting.png') : require('../assets/tabbar/setting_0.png')} />
                            </View>
                        );
                    }
                }}
            />
        </Tab.Navigator>

    );
}
