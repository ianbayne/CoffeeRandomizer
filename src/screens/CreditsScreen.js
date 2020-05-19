import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';

const CreditsScreen = () => {
  const URL = 'https://aero.press/products/brew-recipe-dice';

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
            <WebView
              source={{
                uri: 'https://www.youtube.com/embed/SHdXC_88_2g',
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
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 20}}>Inspired by </Text>
            <TouchableOpacity onPress={() => Linking.openURL(URL)}>
              <Text
                style={{
                  fontSize: 20,
                  opacity: 0.5,
                }}>
                James Hoffman's
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(URL)}>
              <Text
                style={{
                  fontSize: 20,
                  opacity: 0.5,
                }}>
                Coffee Brewing Dice
              </Text>
            </TouchableOpacity>
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
            Aeropress by Ben Biondo from the Noun Project
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
});

export default CreditsScreen;
