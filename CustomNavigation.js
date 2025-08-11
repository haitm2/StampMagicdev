import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main";
import Camera from "./screens/Camera";
import Collection from "./screens/Collection";
import Setting from "./screens/Setting";
import Discovery from "./screens/Discovery";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerShadowVisible: false,
    }}>
      <Stack.Screen
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
}

export { MainNavigator };

const DiscoveryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerShadowVisible: false,
    }}>
      <Stack.Screen
        name="Discovery"
        component={Discovery}
      />
    </Stack.Navigator>
  );
}

export { DiscoveryNavigator };

const CameraNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      // headerTransparent: true,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#F5F5F5',
      },
    }}>
      <Stack.Screen
        name="Camera"
        component={Camera}
      />
    </Stack.Navigator>
  );
}

export { CameraNavigator };

const CollectionNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerShadowVisible: false,
    }}>
      <Stack.Screen
        name="Collection"
        component={Collection}
      />
    </Stack.Navigator>
  );
}

export { CollectionNavigator };


const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerShadowVisible: false,
    }}>
      <Stack.Screen
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
}

export { SettingNavigator };