import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCard from './components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
