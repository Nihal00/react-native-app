import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDark ? styles.whiteColor : styles.blackColor}>
        Hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '85%',
  },

  whiteColor: {
    color: '#FFF',
  },

  blackColor: {
    color: 'black',
  },
});

export default AppPro;
