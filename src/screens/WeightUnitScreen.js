import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import UnitContext from '../context/UnitContext';
import SettingsRow from '../components/SettingsRow';

const TemperatureUnitScreen = ({navigation}) => {
  const {grams, setAsyncStorageForGrams} = useContext(UnitContext);

  function switchToGrams() {
    setAsyncStorageForGrams(true);
  }

  function switchToOunces() {
    setAsyncStorageForGrams(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.unitsSelectionOuterContainer}>
        <View style={styles.unitsSelectionInnerContainer}>
          <SettingsRow
            onPress={switchToGrams}
            settingName="Grams (g)"
            icon={
              grams && (
                <Text style={styles.unitText}>
                  <Ionicons name="ios-checkmark" color="blue" size={20} />
                </Text>
              )
            }
          />

          <SettingsRow
            onPress={switchToOunces}
            settingName="Ounces (oz)"
            outerStyle={{
              borderBottomWidth: 0,
              paddingBottom: 0,
              marginBottom: 0,
            }}
            icon={
              !grams && (
                <Text style={styles.unitText}>
                  <Ionicons name="ios-checkmark" color="blue" size={20} />
                </Text>
              )
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  unitsSelectionOuterContainer: {
    marginTop: 49,
    marginBottom: 40,
  },
  unitsSelectionInnerContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
  },
  unitsSelectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    fontSize: 20,
  },
  labelText: {
    fontSize: 20,
  },
  unitText: {
    fontSize: 20,
    color: 'gray',
    paddingRight: 20,
  },
});

export default TemperatureUnitScreen;
