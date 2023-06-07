import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


export default function Footer({ navigation }) {
  const goToPage = (page) => {
    if (page) {
      navigation.navigate(page);
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View>
        <AntDesign name="home" size={36} color="black" onPress={() => goToPage('Main')}/>
      </View>
      <View>
        <AntDesign name="staro" size={36} color="black" onPress={() => goToPage('Favourites')}/>
      </View>
      <View>
        <AntDesign name="pluscircleo" size={54} color="black"/>
        {/* <AntDesign name="minuscircleo" size={54} color="black" /> */}
      </View>
      <View>
        <AntDesign name="setting" size={36} color="black" onPress={() => goToPage('Settings')}/>
      </View>
      <View>
        <AntDesign name="infocirlceo" size={36} color="black" onPress={() => goToPage('Info')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    // backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    boxShadow: '10px 5px 5px black'
  },
  shadowProp: {
    elevation: 1,
    shadowColor: '#171717',
  }
});
