import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { globalStyle } from '../../../styles/style';
import Search from '../../Search/Search';
import List from '../../List/List';
import { useSelector } from 'react-redux'

export default function Main({ navigation }) {

  const listItems = useSelector(state => state.itemList);

  return (
    <View style={[styles.container, globalStyle.main]}>
      <Search />
      <View style={styles.container}>
        <FlatList data={listItems} renderItem={({ item }) => (
          <List
            title={ item.title }
            text={ item.text }
            watch={ item.watch }
            background={ item.background }
          />
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '10%'
  }
});
