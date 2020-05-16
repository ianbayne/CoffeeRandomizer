import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from './SettingsScreen';
import TemperatureUnitScreen from './TemperatureUnitScreen';
import WeightUnitScreen from './WeightUnitScreen';
import AboutScreen from './AboutScreen';
import FeedbackScreen from './FeedbackScreen';
import CreditsScreen from './CreditsScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#593C1F',
        },
        headerTitleStyle: {color: 'white'},
        headerTintColor: '#ff9900',
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Temperature Unit"
        component={TemperatureUnitScreen}
      />
      <SettingsStack.Screen name="Weight Unit" component={WeightUnitScreen} />
      <SettingsStack.Screen name="About" component={AboutScreen} />
      <SettingsStack.Screen name="Feedback" component={FeedbackScreen} />
      <SettingsStack.Screen name="Credits" component={CreditsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
