import React, {useState, useRef} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const FORM_URI =
  'https://docs.google.com/forms/d/e/1FAIpQLSfezWSiaL5r0zau9iCVie9K4G3tIemrhbQPEi61tlk7OUHd_g/viewform?usp=sf_link';

const INJECTED_JAVASCRIPT =
  "document.getElementsByClassName('freebirdFormviewerViewNavigationPasswordWarning')[0].remove();" +
  "document.getElementsByClassName('freebirdFormviewerViewFooterDisclaimer')[0].parentElement.remove();" +
  "document.getElementsByClassName('freebirdFormviewerViewFeedbackSubmitFeedbackButton')[0].remove();" +
  "document.getElementsByClassName('freebirdThemedFilledButtonM2')[0].style.backgroundColor = '#ff9900';" +
  true;

const FeedbackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webref = useRef(null);

  function handleOnLoad() {
    setIsLoading(false);
    webref.current.injectJavaScript(INJECTED_JAVASCRIPT);
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          size="large"
          style={styles.activityIndicator}
        />
      )}
      <WebView
        onLoad={handleOnLoad}
        source={{
          uri: FORM_URI,
        }}
        ref={webref}
        scalesPageToFit={false}
        javaScriptEnabled={true}
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
