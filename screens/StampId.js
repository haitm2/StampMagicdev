import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Dimensions, Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { MainNavigator, CameraNavigator, CollectionNavigator } from '../CustomNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

export default function StampId() {

    const insets = useSafeAreaInsets();

    return (
        // <NavigationContainer>

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    height: 60 + insets.bottom,
                    position: 'absolute',
                    width: width,
                    bottom: 0,
                    paddingBottom: insets.bottom,
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
                            <View style={{ marginLeft: 30, width: width / 2 - 30, height: 60, marginTop: Platform.isPad ? 0 : 20, alignItems: 'center', justifyContent: 'center' }}>
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
                        navigation.navigate('Camera');
                    },
                })}
            />

            <Tab.Screen
                name="CollectionTab" component={CollectionNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{marginRight: 30, width: width / 2 - 30, height: 60, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={{ width: 20, height: 20 }} source={focused ? require('../assets/tabbar/collection.png') : require('../assets/tabbar/collection_0.png')} />
                            </View>
                        );
                    }
                }}
            />


        </Tab.Navigator>

    );
}
