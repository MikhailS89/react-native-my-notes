import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Settings Page</Text>
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
