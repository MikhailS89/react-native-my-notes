import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello to new project "My Notes"</Text>
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
