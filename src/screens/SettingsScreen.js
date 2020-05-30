import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UnitContext from '../context/unit-context';

import SettingsRow from '../components/SettingsRow';

const SettingsScreen = ({navigation}) => {
  const {celsius, grams} = useContext(UnitContext);

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
          <SettingsRow
            navigation={navigation}
            onPress={() => navigation.navigate('Temperature Unit')}
            settingName="Temperature Unit"
            settingUnit={
              <Text style={styles.unitText}>{celsius ? '°C  ' : '°F  '}</Text>
            }
            icon={
              <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
            }
          />

          <SettingsRow
            navigation={navigation}
            onPress={() => navigation.navigate('Weight Unit')}
            settingName="Weight Unit"
            outerStyle={{
              borderBottomWidth: 0,
            }}
            settingUnit={
              <Text style={styles.unitText}>{grams ? 'g  ' : 'oz  '}</Text>
            }
            icon={
              <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
            }
          />
        </View>
      </View>
      <View style={styles.unitsSelectionInnerContainer}>
        <SettingsRow
          navigation={navigation}
          onPress={() => navigation.navigate('About')}
          settingName="About"
          icon={
            <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
          }
        />

        <SettingsRow
          navigation={navigation}
          onPress={() => navigation.navigate('Feedback')}
          settingName="Feedback"
          icon={
            <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
          }
        />

        <SettingsRow
          navigation={navigation}
          onPress={() => navigation.navigate('Credits')}
          settingName="Credits"
          outerStyle={{
            borderBottomWidth: 0,
          }}
          icon={
            <Ionicons style={styles.arrowForward} name="ios-arrow-forward" />
          }
        />
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
