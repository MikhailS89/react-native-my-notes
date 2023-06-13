import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Watch = () => {
  return (
    <View style={styles.watch}>
      <Entypo name="stopwatch" size={24} color="#312161" />
    </View>
  )
}


export default function List({ title, text, watch, background }) {

  if (watch) {
    return (
      <View style={[styles.list, { backgroundColor: background }]}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.text}>{ text }</Text>
        <Watch />
      </View>
    );
  } else {
    return (
      <View style={[styles.list, { backgroundColor: background }]}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.text}>{ text }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    padding: '5%'
  },
  title: {
    fontSize: 24,
    color: '#312161'
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#312161',
    opacity: 0.5,
    maxHeight: 100
  },
  watch: {
    marginTop: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40
  }
});
