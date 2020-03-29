import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RecipesScreen from './src/screens/RecipesScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Recipes"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let text;

            if (route.name === 'Recipes') {
              text = 'Recipes';
            } else if (route.name === 'Settings') {
              text = 'Settings';
            }

            return <Text style={{color: color}}>{text}</Text>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Recipes" component={RecipesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
