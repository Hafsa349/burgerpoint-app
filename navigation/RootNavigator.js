import React from 'react';
import { AuthStack } from '../navigation';
import { NavigationContainer } from '@react-navigation/native';


export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
