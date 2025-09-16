import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StampId from './screens/StampId';
import "./ignoreWarnings";
import Premium from './screens/Premium';
import Splash from './screens/Splash';
import ATT from './screens/ATT';
import Article from './screens/Article';
import Walkthrough from './screens/Walkthrough';
import Camera from './screens/Camera';
import CollectionDetail from './screens/CollectionDetail';
import Notification from './screens/Notification';
import Setting from './screens/Setting';
import Result from './screens/Result';
import Detail from './screens/Detail';
import Search from './screens/Search';
import PolicyConfirm from './screens/PolicyConfirm';
import Offer from './screens/Offer';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerBackTitle: "",
        headerStyle: {
          backgroundColor: '#F5F5F5'
        },
        headerTintColor: '#000000',
        headerShadowVisible: false
      }}>
        <Stack.Group>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Walkthrough"
            component={Walkthrough}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ATT"
            component={ATT}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StampId"
            component={StampId}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PolicyConfirm"
            component={PolicyConfirm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CollectionDetail"
            component={CollectionDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Article"
            component={Article}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{ presentation: 'modal', headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen
            name="Premium"
            component={Premium}
          />
          <Stack.Screen
            name="Offer"
            component={Offer}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
