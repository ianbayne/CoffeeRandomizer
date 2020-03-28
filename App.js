import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RecipesScreen from './src/screens/RecipesScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recipes" component={RecipesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
