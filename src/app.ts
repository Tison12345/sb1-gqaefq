import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { NavigationContainer } from '@react-navigation/core';
import { createStackNavigator } from "react-nativescript-navigation";
import { AuthScreen } from './components/AuthScreen';
import { MainScreen } from './components/MainScreen';
import { Application } from '@nativescript/core';

// Register icons
Application.setResources({
  icon: {
    home: String.fromCharCode(0xf015),
    search: String.fromCharCode(0xf002),
    history: String.fromCharCode(0xf1da),
    profile: String.fromCharCode(0xf007)
  }
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

ReactNativeScript.start(React.createElement(App, {}, null));