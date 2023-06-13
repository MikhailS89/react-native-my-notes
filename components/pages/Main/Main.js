import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { globalStyle } from '../../../styles/style';
import Search from '../../Search/Search';
import List from '../../List/List';

export default function Main({ navigation }) {

  const [list, setList] = useState([
    { title: 'Designing for emotions', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fdffb2', key: '0' },
    { title: 'Wash the dishes', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fecb4d', key: '1' },
    { title: 'Shopping list in the store', text: 'wireframes , ui ux design and emotion design Designing for users, wireframes , ui ux design and emotion design Designing for users, wireframes , ui ux design and emotion design Designing for users', watch: false, background: '#f0e9ff', key: '2' },
    { title: 'Self-study', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#f29c98', key: '3' },
    { title: 'Go to a workout', text: 'wireframes , ui ux design and emotion design Designing for users', watch: true, background: '#fdffb2', key: '4' }
  ]);


  return (
    <View style={[styles.container, globalStyle.main]}>
      <Search />
      <View style={styles.container}>
        <FlatList data={list} renderItem={({ item }) => (
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
    // height: 'auto',
    marginBottom: '10%'
  }
});
