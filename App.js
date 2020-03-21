/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {
  STIRRING,
  WATER_TEMPERATURE,
  COFFEE_TO_WATER_RATIO,
  GRIND_AND_BREW_TIME,
  BLOOM_TIME_AND_INVERSION,
} from './src/constants';

const App: () => React$Node = () => {
  const [stirring, setStirring] = useState(null);
  const [waterTemp, setWaterTemp] = useState(null);
  const [coffeeToWaterRatio, setCoffeeToWaterRatio] = useState(null);
  const [grindAndBrewTime, setGrindAndBrewTime] = useState(null);
  const [bloomTimeAndInversion, setBloomTimeAndInversion] = useState(null);

  function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function onPress() {
    setStirring(selectRandomItem(STIRRING));
    setWaterTemp(selectRandomItem(WATER_TEMPERATURE));
    setCoffeeToWaterRatio(selectRandomItem(COFFEE_TO_WATER_RATIO));
    setGrindAndBrewTime(selectRandomItem(GRIND_AND_BREW_TIME));
    setBloomTimeAndInversion(selectRandomItem(BLOOM_TIME_AND_INVERSION));
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Welcome to the Aeropress Recipe maker!
            </Text>
          </View>
          <Button title="Randomize" onPress={onPress} />
          <Text>{stirring}</Text>
          <Text>{waterTemp}</Text>
          <Text>{coffeeToWaterRatio}</Text>
          <Text>{grindAndBrewTime}</Text>
          <Text>{bloomTimeAndInversion}</Text>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
