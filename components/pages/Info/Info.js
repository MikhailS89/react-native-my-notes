import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Info Page"</Text>
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
