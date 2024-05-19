import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SelectPlayers from "./components/SelectPlayers";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.fontColor}>TIK TAC TOE</Text>
          <SelectPlayers />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#111',
  },
  container: {
    flex: 1,
    alignItems: "center",
    height: 24,
  },
  fontColor: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '600',
    marginTop: 12,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensure ScrollView takes up the entire screen
  },
});
