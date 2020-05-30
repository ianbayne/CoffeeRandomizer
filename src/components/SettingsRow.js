import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

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
    <TouchableHighlight
      style={[
        styles.unitsSelectionRow,
        {borderBottomWidth: 1, borderColor: '#c4c4c4'},
        outerStyle,
      ]}
      onPress={onPress}
      underlayColor="#c4c4c4"
      disabled={disabled}>
      <View
        style={[
          {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: 15,
            paddingVertical: 10,
          },
        ]}>
        <Text style={styles.labelText}>{settingName}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {settingUnit}
          {icon}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  unitsSelectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
