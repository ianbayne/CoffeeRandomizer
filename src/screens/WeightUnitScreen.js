import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UnitContext from '../context/unit-context';

const TemperatureUnitScreen = ({navigation}) => {
  const {useGrams, setGrams} = useContext(UnitContext);

  return (
    <View style={styles.container}>
      <View style={styles.unitsSelectionOuterContainer}>
        <View style={styles.unitsSelectionInnerContainer}>
          <TouchableOpacity
            style={[
              (styles.unitsSelectionRow, styles.unitsSelectionRow),
              {borderBottomWidth: 1, borderColor: '#c4c4c4'},
            ]}
            onPress={() => setGrams(true)}>
            <Text style={styles.labelText}>Grams (g)</Text>
            <Text style={styles.unitText}>
              {useGrams && (
                <Ionicons name="ios-checkmark" color="blue" size={20} />
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={(styles.unitsSelectionRow, styles.unitsSelectionRow)}
            onPress={() => setGrams(false)}>
            <Text style={styles.labelText}>Ounces (oz)</Text>
            <Text style={styles.unitText}>
              {!useGrams && (
                <Ionicons name="ios-checkmark" color="blue" size={20} />
              )}
            </Text>
          </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 40,
  },
  unitsSelectionInnerContainer: {
    paddingLeft: 15,
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
