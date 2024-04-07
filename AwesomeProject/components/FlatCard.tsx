import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.handingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  handingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 7,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF5733',
  },
  cardTwo: {
    backgroundColor: '#521de3',
  },
  cardThree: {
    backgroundColor: '#44e2b5',
  },
});
