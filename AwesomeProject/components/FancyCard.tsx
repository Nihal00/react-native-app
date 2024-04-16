import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.handingText}>Trending Place</Text>
      <View style={[styles.card, styles.cardElevated]}></View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink City Jaipur</Text>
        <Text style={styles.cardDescription}>
          Mahal is a palace in the city of Jaipur, India. Built from red and
          pink sandstone, it is on the edge of the City Palace.
        </Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  handingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
