import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';

import RecipesStackScreen from './screens/RecipesStackScreen';
import SettingsStackScreen from './screens/SettingsStackScreen';

import UnitContext from './context/unit-context';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const [celsius, setCelsius] = useState(true);
  const [grams, setGrams] = useState(true);

  const setAsyncStorageForCelsius = celsius => {
    AsyncStorage.setItem('celsius', JSON.stringify(celsius));
    setCelsius(celsius);
  };
  const setAsyncStorageForGrams = grams => {
    AsyncStorage.setItem('grams', JSON.stringify(grams));
    setGrams(grams);
  };

  const value = {
    celsius,
    setAsyncStorageForCelsius,
    grams,
    setAsyncStorageForGrams,
  };

  useEffect(() => {
    SplashScreen.hide();
    (async () => {
      const storedCelsius = await AsyncStorage.getItem('celsius');
      if (storedCelsius) {
        setCelsius(JSON.parse(storedCelsius));
      }
      const storedGrams = await AsyncStorage.getItem('grams');
      if (storedGrams) {
        setGrams(JSON.parse(storedGrams));
      }
    })();
  }, []);

  return (
    <UnitContext.Provider value={value}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Recipes"
          screenOptions={({route}) => ({
            tabBarIcon: ({_, color, size}) => {
              let iconName;

              if (route.name === 'Recipes') {
                iconName = Platform.select({
                  ios: 'ios-list',
                  android: 'md-list',
                });
              } else if (route.name === 'Settings') {
                iconName = Platform.select({
                  ios: 'ios-settings',
                  android: 'md-settings',
                });
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Recipes" component={RecipesStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </UnitContext.Provider>
  );
};

export default App;
