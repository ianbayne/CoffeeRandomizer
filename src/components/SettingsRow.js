import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const SettingsRow = ({
  navigation,
  settingUnit,
  icon,
  onPress,
  settingName,
  outerStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.unitsSelectionRow,
        {borderBottomWidth: 1, borderColor: '#c4c4c4'},
        outerStyle,
      ]}
      onPress={onPress}>
      <Text style={styles.labelText}>{settingName}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        {settingUnit}
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default SettingsRow;
