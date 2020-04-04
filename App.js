import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RecipesStackScreen from './src/screens/RecipesStackScreen';
import SettingsStackScreen from './src/screens/SettingsStackScreen';

import UseCelsiusContext from './src/context/use-celsius-context';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const [useCelsius, setUseCelsius] = useState(true);
  const value = {useCelsius, setUseCelsius};

  return (
    <UseCelsiusContext.Provider value={value}>
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
          <Tab.Screen name="Recipes" component={RecipesStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </UseCelsiusContext.Provider>
  );
};

export default App;
