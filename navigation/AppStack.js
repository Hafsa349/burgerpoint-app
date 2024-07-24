// AppStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, SignupScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen component={HomeScreen} name="HomeScreen" />
      <Screen component={LoginScreen} name="LoginScreen" />
      <Screen component={SignupScreen} name="SignupScreen" />
    </Navigator>
  );
};
