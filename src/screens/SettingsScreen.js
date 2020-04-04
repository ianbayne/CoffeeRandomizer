import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

import UseCelsiusContext from '../context/use-celsius-context';

const SettingsScreen = () => {
  const {useCelsius, setUseCelsius} = useContext(UseCelsiusContext);

  const [test, setTest] = useState(false);
  function toggleTest(value) {
    setTest(value);
  }

  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Use metric for temperatures</Text>
        <Switch
          onValueChange={() => setUseCelsius(!useCelsius)}
          value={useCelsius}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Test test</Text>
        <Switch onValueChange={toggleTest} value={test} />
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
