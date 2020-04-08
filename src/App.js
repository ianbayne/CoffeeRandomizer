import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import RecipesStackScreen from './screens/RecipesStackScreen';
import SettingsStackScreen from './screens/SettingsStackScreen';

import UseCelsiusContext from './context/use-celsius-context';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const [useCelsius, setUseCelsius] = useState(true);
  const setCelsius = useCelsius => {
    AsyncStorage.setItem('celsius', JSON.stringify(useCelsius));
    setUseCelsius(useCelsius);
  };
  const value = {useCelsius, setCelsius};

  useEffect(() => {
    (async () => {
      const storedCelsius = await AsyncStorage.getItem('celsius');
      if (storedCelsius) {
        setUseCelsius(JSON.parse(storedCelsius));
      }
    })();
  }, []);
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
