import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Add({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Add Page</Text>
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
