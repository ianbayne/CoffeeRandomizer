import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeStep = ({ stepCount, children }) => {
  return (
    <View style={styles.container}>
      <Text
        style={({ paddingRight: 5 }, styles.steps)}>{`${stepCount}. `}</Text>
      <Text style={({ flex: 1, paddingLeft: 10 }, styles.steps)}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  steps: {
    fontSize: 20,
    lineHeight: 30,
  },
});

export default RecipeStep;
