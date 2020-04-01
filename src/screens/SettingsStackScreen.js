import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from './SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#593C1F',
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
