import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SIZE_TAB_CENTER = 60
const COLOR_TAB_CENTER = '#312161'

export default function TabBarButtonCenter( props ) {
    return (
        <TouchableOpacity style={[styles.tabBarButtonWrap]} onPress={() => console.log('TabBarButtonCenter: onPress: props: ', props)}>
          <AntDesign style={[styles.tabBarButtonItem]} name="pluscircle" size={SIZE_TAB_CENTER} color={COLOR_TAB_CENTER} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabBarButtonWrap: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 999,
        width: 65,
        height: 65,
        top: '-40%',
    },
    tabBarButtonItem: {
        position: 'absolute',
        borderRadius: 999,
        backgroundColor: 'white',
        elevation: 5
    }
});