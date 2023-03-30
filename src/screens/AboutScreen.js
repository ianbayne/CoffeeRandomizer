import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Hi there.</Text>
        <Text style={styles.bodyText}>
          I hope you're liking my app! While I suspect its self-explanatory, the{' '}
          <Text style={{ textDecorationLine: 'line-through' }}>main</Text>{' '}
          <Text style={{ fontWeight: 'bold' }}>only</Text> way to use it is for
          generating random coffee recipes for your Aeropress.
        </Text>
        <Text style={styles.bodyText}>
          I made this app for a couple of reasons:
        </Text>
        <View style={styles.list}>
          <View style={[styles.listRow, { marginBottom: 5 }]}>
            <Text style={styles.listItemNumber}>1.</Text>
            <Text style={styles.listItemText}>
              My deep devotion and commitment to drinking way more coffee than
              is healthy for me
            </Text>
          </View>

          <View style={styles.listRow}>
            <Text style={styles.listItemNumber}>2.</Text>
            <Text style={styles.listItemText}>GOTO 1</Text>
          </View>
        </View>

        <Text style={styles.bodyText}>Plans for the future include:</Text>
        <View style={styles.list}>
          <View style={[styles.listRow, { marginBottom: 5 }]}>
            <Text style={styles.listItemNumber}>•</Text>
            <Text style={styles.listItemText}>
              Adding the ability to save recipes
            </Text>
          </View>

          <View style={styles.listRow}>
            <Text style={styles.listItemNumber}>•</Text>
            <Text style={styles.listItemText}>
              Including recipes for French press and pourover coffee
            </Text>
          </View>
        </View>

        <Text style={styles.bodyText}>
          So go ahead, boil a kettle of water, get out your favorite overpriced
          coffee beans, click the New Recipe button on the Recipes screen, and
          follow the directions for a new recipe.
        </Text>

        <Text style={styles.bodyText}>Enjoy!</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  content: {
    margin: 40,
    padding: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
  },
  bodyText: {
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 25,
  },
  list: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  listRow: {
    flexDirection: 'row',
  },
  listItemNumber: {
    fontSize: 20,
    lineHeight: 25,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 20,
    lineHeight: 25,
  },
});

export default AboutScreen;
