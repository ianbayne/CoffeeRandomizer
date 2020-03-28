import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.settings}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
