import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function List() {
  return (
    <View style={styles.list}>
      <Text style={styles.title}>Designing for emotions</Text>
      <Text style={styles.text}>wireframes , ui ux design and emotion design Designing for users</Text>
      <View style={styles.watch}>
        <Entypo name="stopwatch" size={24} color="#312161" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: '#ffc5f7',
    padding: '5%'
  },
  title: {
    fontSize: 24,
    color: '#312161'
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#be77b4',
    maxHeight: 100
  },
  watch: {
    marginTop: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: '#ffc5f7',
    width: 40
  }
});
