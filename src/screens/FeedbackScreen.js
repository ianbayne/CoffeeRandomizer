import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const FeedbackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={isLoading}
        size="large"
        style={styles.activityIndicator}
      />
      <WebView
        onLoad={() => setIsLoading(false)}
        source={{uri: 'https://infinite.red'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default FeedbackScreen;
