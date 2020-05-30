import React, {useState, useContext} from 'react';
import {
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
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

const {height} = Dimensions.get('window');

const RecipesScreen = () => {
  const {useCelsius, useGrams} = useContext(UnitContext);

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
        convertedCoffeeWeight = useGrams
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
          <Text
            style={{fontWeight: 'bold'}}>{`${grindAndBrewTime.grind} `}</Text>
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
        convertedWaterTemp = useCelsius
          ? `${waterTemp} °C`
          : `${convertCelsiusToFahrenheit(waterTemp)} °F`;
      } else {
        convertedWaterTemp = waterTemp;
      }

      let convertedWaterWeight;
      if (typeof waterWeight === 'number') {
        convertedWaterWeight = useGrams
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
          <Text style={{fontWeight: 'bold'}}>{` ${convertedWaterTemp}`}</Text>.
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
          {`Add `}
          <Text style={{fontWeight: 'bold'}}>
            {bloomTimeAndInversion.water}
          </Text>
          {` and bloom for `}
          <Text style={{fontWeight: 'bold'}}>
            {`${bloomTimeAndInversion.time}.`}
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
          <Text
            style={{fontWeight: 'bold'}}>{` ${grindAndBrewTime.time}`}</Text>
          .
        </RecipeStep>
      );
    }
  }

  function renderStirStep() {
    if (stirring) {
      return <RecipeStep stepCount={6}>{stirring}.</RecipeStep>;
    }
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View style={styles.mainContent}>
          <View
            style={{
              position: 'absolute',
              height: height / 2 + 80,
              width: '100%',
              left: 5,
            }}>
            <Image
              style={{
                position: 'relative',
                left: '50%',
                top: '50%',
                height: 100,
                width: 48,
              }}
              opacity={0.2}
              source={require('../assets/images/aeropress.png')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              activeOpacity={1}
              underlayColor="#ea7631"
              onPress={onPress}
              disabled={isLoading}>
              <Text style={styles.buttonText}>New Recipe</Text>
            </TouchableHighlight>
          </View>
          {loading && (
            <View style={styles.activityIndicator}>
              <ActivityIndicator
                animating={loading}
                size="large"
                color="#0000ff"
              />
            </View>
          )}

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
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 125,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: '#ddd',
    borderRadius: 15,
    width: 225,
    backgroundColor: '#ff9900',
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
    color: '#fff',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  container: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: '100%',
  },
  mainContent: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    backgroundColor: '#f9f9f9',
  },
  steps: {
    fontSize: 20,
    lineHeight: 30,
  },
});

export default RecipesScreen;
