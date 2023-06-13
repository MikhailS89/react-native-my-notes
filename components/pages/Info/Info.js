import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyle } from '../../../styles/style';

export default function Info({ navigation }) {
  return (
    <View style={[styles.container, globalStyle.main]}>
      <View>
        <Text>Info Page</Text>
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
