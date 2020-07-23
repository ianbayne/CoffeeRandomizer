import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';

import {WebView} from 'react-native-webview';

const AEROPRESS_DICE_URL = 'https://aero.press/products/brew-recipe-dice';
const YOUTUBE_URL = 'https://www.youtube.com/embed/SHdXC_88_2g';

const CreditsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  function handleOnLoad() {
    setIsLoading(false);
  }

  function openUrl() {
    Linking.openURL(AEROPRESS_DICE_URL);
  }

  return (
    <ScrollView style={{backgroundColor: '#f9f9f9', flex: 1}}>
      <View style={styles.content}>
        <View style={styles.segment}>
          <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 30}}>
            Inspiration
          </Text>

          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
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
                uri: YOUTUBE_URL,
              }}
              style={{
                height: 157.5,
                width: 230,
                alignSelf: 'center',
                marginBottom: 20,
              }}
            />
          </View>

          <View
            style={{
              paddingLeft: 20,
            }}>
            <Text>
              <Text style={{fontSize: 20}}>Inspired by </Text>
              <Text
                onPress={openUrl}
                style={{
                  fontSize: 20,
                  opacity: 0.5,
                }}>
                James Hoffman's Coffee Brewing Dice
              </Text>
              <Text>.</Text>
            </Text>
          </View>
        </View>
        <View style={styles.segment}>
          <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 30}}>
            Icon
          </Text>
          <Image
            style={{
              height: 100,
              width: 48,
              marginBottom: 40,
              alignSelf: 'center',
            }}
            source={require('../assets/images/aeropress.png')}
          />
          <Text style={{fontSize: 20, paddingLeft: 20}}>
            Aeropress by Ben Biondo from the Noun Project.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 40,
    padding: 15,
  },
  segment: {
    marginBottom: 60,
    flex: 1,
  },
  activityIndicator: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 15,
    left: 0,
  },
});

export default CreditsScreen;
