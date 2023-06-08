import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default function Search() {
  return (
    <View>
      <Text>Search component</Text>
      <EvilIcons name="search" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({

});
