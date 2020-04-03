import React, {useState} from 'react';
import {
  TouchableHighlight,
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
} from '../constants';

const RecipesScreen = () => {
  const [stirring, setStirring] = useState(null);
  const [waterTemp, setWaterTemp] = useState(null);
  const [coffeeToWaterRatio, setCoffeeToWaterRatio] = useState(null);
  const [grindAndBrewTime, setGrindAndBrewTime] = useState(null);
  const [bloomTimeAndInversion, setBloomTimeAndInversion] = useState(null);

  function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function onPress() {
    setStirring(null);
    setWaterTemp(null);
    setCoffeeToWaterRatio(null);
    setGrindAndBrewTime(null);
    setBloomTimeAndInversion(null);

    setTimeout(() => {
      setStirring(selectRandomItem(STIRRING));
      setWaterTemp(selectRandomItem(WATER_TEMPERATURE));
      setCoffeeToWaterRatio(selectRandomItem(COFFEE_TO_WATER_RATIO));
      setGrindAndBrewTime(selectRandomItem(GRIND_AND_BREW_TIME));
      setBloomTimeAndInversion(selectRandomItem(BLOOM_TIME_AND_INVERSION));
    }, 200);
  }

  function grindCoffeeStep() {
    if (coffeeToWaterRatio !== null && grindAndBrewTime !== null) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>1. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            Grind
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              {coffeeToWaterRatio.coffee}{' '}
            </Text>
            of coffee to a
            <Text style={{fontWeight: 'bold'}}> {grindAndBrewTime.grind} </Text>
            consistency.
          </Text>
        </View>
      );
    }
  }

  function heatWaterStep() {
    if (coffeeToWaterRatio !== null && waterTemp !== null) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>2. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            Heat
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              {coffeeToWaterRatio.water}{' '}
            </Text>
            of water to a temperature of
            <Text style={{fontWeight: 'bold'}}> {waterTemp}</Text>.
          </Text>
        </View>
      );
    }
  }

  function orientationStep() {
    if (bloomTimeAndInversion !== null) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>3. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            Put the aeropress in
            <Text style={{fontWeight: 'bold'}}>
              {' '}
              {bloomTimeAndInversion.orientation}{' '}
            </Text>
            orientation and add the coffee.
          </Text>
        </View>
      );
    }
  }

  function bloomStep() {
    if (bloomTimeAndInversion !== null && bloomTimeAndInversion.bloom) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>4. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            Add{' '}
            <Text style={{fontWeight: 'bold'}}>
              {bloomTimeAndInversion.water}
            </Text>{' '}
            and bloom for{' '}
            <Text style={{fontWeight: 'bold'}}>
              {bloomTimeAndInversion.time}
            </Text>
            .
          </Text>
        </View>
      );
    }
  }

  function brewStep() {
    if (grindAndBrewTime !== null) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>5. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            Add the remaining water and wait for
            <Text style={{fontWeight: 'bold'}}> {grindAndBrewTime.time}</Text>.
          </Text>
        </View>
      );
    }
  }

  function stirStep() {
    if (stirring !== null) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={({paddingRight: 5}, styles.steps)}>6. </Text>
          <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
            {stirring}.
          </Text>
        </View>
      );
    }
  }
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={0.6}
              underlayColor="#ddd"
              onPress={onPress}>
              <Text style={styles.buttonText}>Randomize</Text>
            </TouchableHighlight>
          </View>
          <View>{grindCoffeeStep()}</View>
          <View>{heatWaterStep()}</View>
          <View>{orientationStep()}</View>
          {bloomTimeAndInversion !== null && bloomTimeAndInversion.bloom && (
            <View>{bloomStep()}</View>
          )}
          <View>{brewStep()}</View>
          <View>{stirStep()}</View>
          {stirring !== null && (
            <View style={{flexDirection: 'row'}}>
              <Text style={({paddingRight: 5}, styles.steps)}>7. </Text>
              <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
                Press.
              </Text>
            </View>
          )}
          {coffeeToWaterRatio !== null && coffeeToWaterRatio.diluteToShare && (
            <View style={{flexDirection: 'row'}}>
              <Text style={({paddingRight: 5}, styles.steps)}>8. </Text>
              <Text style={({flex: 1, paddingLeft: 10}, styles.steps)}>
                Dilute to share.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 15,
    width: 225,
    backgroundColor: '#eee',
    marginTop: 30,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  container: {
    backgroundColor: '#fff',
  },
  mainContent: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  steps: {
    fontSize: 20,
    lineHeight: 30,
  },
});

export default RecipesScreen;
