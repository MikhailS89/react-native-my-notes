import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyle } from '../../../styles/style';
import Search from '../../Search/Search';
import List from '../../List/List';

export default function Main({ navigation }) {
  return (
    <View style={[styles.container, globalStyle.main]}>
      <Search />
      <View style={styles.container}>
        <List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    flex: 1
  }
});
