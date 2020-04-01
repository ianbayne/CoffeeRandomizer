import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from './SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#593C1F',
        },
        headerTitleStyle: {color: 'white'},
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
