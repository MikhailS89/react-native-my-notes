import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Favourites({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Favourites Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1
  }
});
