import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RecipesScreen from './RecipesScreen';

const RecipesStack = createStackNavigator();

const RecipesStackScreen = () => {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#593C1F',
          },
          headerTitleStyle: {color: 'white'},
        }}
      />
    </RecipesStack.Navigator>
  );
};

export default RecipesStackScreen;
