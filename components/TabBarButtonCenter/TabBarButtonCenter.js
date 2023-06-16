import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';

const SIZE_TAB_CENTER = 60
const COLOR_TAB_CENTER = '#312161'

export default function TabBarButtonCenter() {
    return (
        <View style={[styles.tabBarButtonWrap]}>
            <AntDesign style={[styles.tabBarButtonItem]} name="pluscircle" size={SIZE_TAB_CENTER} color={COLOR_TAB_CENTER} />
        </View>
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
        top: '-50%',
    },
    tabBarButtonItem: {
        position: 'absolute',
        borderRadius: 999,
        backgroundColor: 'white',
        elevation: 5,
    }
});