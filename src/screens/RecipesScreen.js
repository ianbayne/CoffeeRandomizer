import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import RecipeStep from '../components/RecipeStep';
import UnitContext from '../context/unit-context';

import {
  STIRRING,
  WATER_TEMPERATURE_IN_CELSIUS,
  COFFEE_TO_WATER_RATIO,
  GRIND_AND_BREW_TIME,
  BLOOM_TIME_AND_INVERSION,
} from '../constants';

const {width, height} = Dimensions.get('window');

const RecipesScreen = () => {
  const {celsius, grams} = useContext(UnitContext);

  const [stirring, setStirring] = useState(null);
  const [waterTemp, setWaterTemp] = useState(null);
  const [coffeeToWaterRatio, setCoffeeToWaterRatio] = useState(null);
  const [grindAndBrewTime, setGrindAndBrewTime] = useState(null);
  const [bloomTimeAndInversion, setBloomTimeAndInversion] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function convertCelsiusToFahrenheit(celsiusTemperature) {
    return celsiusTemperature * 1.8 + 32;
  }

  function convertGramsToOunces(grams) {
    return (grams * 0.03527396195).toFixed(2);
  }

  function onPress() {
    setBrewingStatesToNull();
    setIsLoading(true);

    setTimeout(() => {
      setBrewingStates();
      setIsLoading(false);
    }, 400);
  }

  function setBrewingStatesToNull() {
    setStirring(null);
    setWaterTemp(null);
    setCoffeeToWaterRatio(null);
    setGrindAndBrewTime(null);
    setBloomTimeAndInversion(null);
  }

  function setBrewingStates() {
    setStirring(selectRandomItem(STIRRING));
    setWaterTemp(selectRandomItem(WATER_TEMPERATURE_IN_CELSIUS));
    setCoffeeToWaterRatio(selectRandomItem(COFFEE_TO_WATER_RATIO));
    setGrindAndBrewTime(selectRandomItem(GRIND_AND_BREW_TIME));
    setBloomTimeAndInversion(selectRandomItem(BLOOM_TIME_AND_INVERSION));
  }

  function renderGrindCoffeeStep() {
    if (coffeeToWaterRatio && grindAndBrewTime) {
      const coffeeWeight = coffeeToWaterRatio.coffee;

      let convertedCoffeeWeight;
      if (typeof coffeeWeight === 'number') {
        convertedCoffeeWeight = grams
          ? `${coffeeWeight}g`
          : `${convertGramsToOunces(coffeeWeight)} oz`;
      } else {
        convertedCoffeeWeight = coffeeWeight;
      }
      return (
        <RecipeStep stepCount={1}>
          Grind
          <Text
            style={{fontWeight: 'bold'}}>{` ${convertedCoffeeWeight} `}</Text>
          of coffee to {grindAndBrewTime.grind !== 'your desired' && 'a '}
          <Text style={{fontWeight: 'bold'}}>{`${
            grindAndBrewTime.grind
          } `}</Text>
          consistency.
        </RecipeStep>
      );
    }
  }

  function renderHeatWaterStep() {
    if (coffeeToWaterRatio && waterTemp) {
      const waterWeight = coffeeToWaterRatio.water;

      let convertedWaterTemp;
      if (typeof waterTemp === 'number') {
        convertedWaterTemp = celsius
          ? `${waterTemp} °C`
          : `${convertCelsiusToFahrenheit(waterTemp)} °F`;
      } else {
        convertedWaterTemp = waterTemp;
      }

      let convertedWaterWeight;
      if (typeof waterWeight === 'number') {
        convertedWaterWeight = grams
          ? `${waterWeight}g`
          : `${convertGramsToOunces(waterWeight)} oz`;
      } else {
        convertedWaterWeight = waterWeight;
      }
      return (
        <RecipeStep stepCount={2}>
          Heat
          <Text
            style={{fontWeight: 'bold'}}>{` ${convertedWaterWeight} `}</Text>
          of water to a temperature of
          <Text style={{fontWeight: 'bold'}}>{` ${convertedWaterTemp}.`}</Text>
        </RecipeStep>
      );
    }
  }

  function renderOrientationStep() {
    if (bloomTimeAndInversion) {
      return (
        <RecipeStep stepCount={3}>
          Put the aeropress in
          <Text style={{fontWeight: 'bold'}}>
            {` ${bloomTimeAndInversion.orientation} `}
          </Text>
          orientation and add the coffee.
        </RecipeStep>
      );
    }
  }

  function renderBloomStep() {
    if (bloomTimeAndInversion?.bloom) {
      return (
        <RecipeStep stepCount={4}>
          Add
          <Text style={{fontWeight: 'bold'}}>
            {` ${bloomTimeAndInversion.water} `}
          </Text>
          and bloom for
          <Text style={{fontWeight: 'bold'}}>
            {` ${bloomTimeAndInversion.time}.`}
          </Text>
        </RecipeStep>
      );
    }
    if (!bloomTimeAndInversion?.bloom) {
      return (
        <RecipeStep stepCount={4}>
          <Text>Skip the bloom step.</Text>
        </RecipeStep>
      );
    }
  }

  function renderBrewStep() {
    if (grindAndBrewTime) {
      return (
        <RecipeStep stepCount={5}>
          Add the remaining water and wait for
          <Text style={{fontWeight: 'bold'}}>
            {` ${grindAndBrewTime.time}.`}
          </Text>
        </RecipeStep>
      );
    }
  }

  function renderStirStep() {
    if (stirring) {
      return <RecipeStep stepCount={6}>{stirring}.</RecipeStep>;
    }
  }

  const spinValue = new Animated.Value(0);
  const animation = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (isLoading) {
    animation.start();
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
          <View style={{marginBottom: 50}} />
          <View style={styles.buttonAndIconContainer}>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={1}
              underlayColor="#ea7631"
              onPress={onPress}
              disabled={isLoading}>
              <Text style={styles.buttonText}>New Recipe</Text>
            </TouchableHighlight>
          </View>
          <Animated.Image
            style={[styles.icon, {transform: [{rotate: spin}]}, ,]}
            source={require('../assets/images/aeropress.png')}
          />
          <View style={{width: width, position: 'absolute', top: 150}}>
            <View style={styles.recipeContainer}>
              {renderGrindCoffeeStep()}
              {renderHeatWaterStep()}
              {renderOrientationStep()}
              {bloomTimeAndInversion && renderBloomStep()}
              {renderBrewStep()}
              {renderStirStep()}
              {stirring && <RecipeStep stepCount={7}>Press.</RecipeStep>}
              {coffeeToWaterRatio?.diluteToShare && (
                <RecipeStep stepCount={8}>Dilute to share.</RecipeStep>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: '#ddd',
    borderRadius: 15,
    width: 225,
    backgroundColor: '#ff9900',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonAndIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    left: width / 2 - 24,
    top: height / 2 - 130,
    height: 100,
    width: 48,
    opacity: 0.2,
  },
  recipeContainer: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: (width / 1.1) * 0.8,
  },
});

export default RecipesScreen;
