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
        <List
          title='Designing for emotions'
          text='wireframes , ui ux design and emotion design Designing for users'
          watch={true}
          background='#fdffb2'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
