import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UnitContext from '../context/unit-context';

const SettingsScreen = ({navigation}) => {
  const {useCelsius, useGrams} = useContext(UnitContext);

  return (
    <View style={styles.container}>
      <View style={styles.unitsSelectionOuterContainer}>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 20,
            paddingBottom: 5,
            color: '#888',
          }}>
          UNITS
        </Text>
        <View style={styles.unitsSelectionInnerContainer}>
          <TouchableOpacity
            style={[
              (styles.unitsSelectionRow, styles.unitsSelectionRow),
              {borderBottomWidth: 1, borderColor: '#c4c4c4'},
            ]}
            onPress={() => navigation.navigate('Temperature Unit')}>
            <Text style={styles.labelText}>Temperature Unit</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.unitText}>
                {useCelsius ? '°C  ' : '°F  '}
              </Text>
              <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.unitsSelectionRow}
            onPress={() => navigation.navigate('Weight Unit')}>
            <Text style={styles.labelText}>Weight Unit</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.unitText}>{useGrams ? 'g  ' : 'oz  '}</Text>
              <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.unitsSelectionInnerContainer}>
        <TouchableOpacity
          style={[
            (styles.unitsSelectionRow, styles.unitsSelectionRow),
            {borderBottomWidth: 1, borderColor: '#c4c4c4'},
          ]}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.labelText}>About</Text>
          <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            (styles.unitsSelectionRow, styles.unitsSelectionRow),
            {borderBottomWidth: 1, borderColor: '#c4c4c4'},
          ]}
          onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.labelText}>Feedback</Text>
          <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.unitsSelectionRow}
          onPress={() => navigation.navigate('Credits')}>
          <Text style={styles.labelText}>Credits</Text>
          <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        AeroPress Project v1.0.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  unitsSelectionOuterContainer: {
    marginTop: 20,
    marginBottom: 50,
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
  },
  arrowForward: {
    color: '#bbb',
    paddingRight: 20,
    fontSize: 20,
    top: 2,
  },
});

export default SettingsScreen;
