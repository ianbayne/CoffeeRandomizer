import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

import UnitContext from '../context/unit-context';

const SettingsScreen = () => {
  const {useCelsius, setCelsius, useGrams, setGrams} = useContext(UnitContext);

  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Use metric for temperatures</Text>
        <Switch
          onValueChange={() => setCelsius(!useCelsius)}
          value={useCelsius}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Use metric for weights</Text>
        <Switch onValueChange={() => setGrams(!useGrams)} value={useGrams} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    marginTop: 100,
    paddingHorizontal: 30,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 20,
  },
});

export default SettingsScreen;
