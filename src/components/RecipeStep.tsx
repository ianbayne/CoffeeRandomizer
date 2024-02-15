import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  stepCount: number;
  children: React.ReactNode;
};

const RecipeStep = ({ stepCount, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        // TODO: Should this be style={[{ paddingRight: 5 }, styles.steps]}
        style={
          ({ paddingRight: 5 }, styles.steps)
        }>{`${stepCount}. `}</Text>{' '}
      <Text
        // TODO: Should this be style={[{ flex: 1, paddingLeft: 10 }, styles.steps]}
        style={({ flex: 1, paddingLeft: 10 }, styles.steps)}>
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
