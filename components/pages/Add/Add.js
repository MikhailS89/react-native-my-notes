import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { globalStyle } from '../../../styles/style';
import { generatorKey } from '../../../utils/toobox';
import { useDispatch } from 'react-redux'
import { setDisplay, addItem } from '../../../redux/reducer';

const MONTH = {
  0: 'january',
  1: 'february',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october',
  10: 'november',
  11: 'december'
}

const ICON_DEFAULT_SIZE = 30
const ICON_DEFAULT_COLOR = '#8a63f7'
const ICON_CLOZE_SIZE = 24
const ICON_CLOSE_COLOR = '#7b6f93'
const ICON_ADD_SIZE = 24
const ICON_ADD_COLOR = '#9471f8'

export default function Add({ navigation }) {

  const dispatch = useDispatch()

  const [title, setTile] = useState('')
  const [text, setText] = useState('')

  const setDate = () => {
    const date = new Date()
    return [date.getDate(), MONTH[date.getMonth()], date.getFullYear()].join(' ')
  }

  const close = () => {
    setTile('')
    setText('')
    navigation.goBack()
  }

  const add = () => {
    const newItem = {
      title: title,
      text: text,
      watch: false,
      background: '',
      key: generatorKey()
    }

    if (title && text) {
      dispatch(addItem(newItem))
    }

    setTile('')
    setText('')
    navigation.navigate('Main');
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setDisplay('none'))
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(setDisplay('flex'))
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[globalStyle.main]}>
        <View style={[styles.header]}>
            <AntDesign /*style={[styles.close]}*/ name="close" size={ICON_CLOZE_SIZE} color={ICON_CLOSE_COLOR} onPress={close}/>
            <View style={[styles.menu]}>
                <Feather name="droplet" size={ICON_DEFAULT_SIZE} color={ICON_DEFAULT_COLOR} />
                <Entypo name="stopwatch" size={ICON_DEFAULT_SIZE} color={ICON_DEFAULT_COLOR} />
                <Feather name="check" size={ICON_ADD_SIZE} color={ICON_ADD_COLOR} onPress={add}/>
            </View>
        </View>
        <View>
            <TextInput
                style={[styles.inputTitle]}
                value={title}
                placeholder='Title'
                placeholderTextColor='#e7dfff'
                selectionColor='#a990dd'
                onChangeText={setTile}
            />
            <Text style={[styles.text]}>
              { setDate() }
            </Text>
            <TextInput
                style={[styles.inputDesc]}
                value={text}
                multiline
                placeholder='Descripstion'
                placeholderTextColor='#e7dfff'
                selectionColor='#a990dd'
                onChangeText={setText}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'space-between',
  //   flex: 1
  // },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  // close: {

  // },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%'
  },
  inputTitle: {
    color: '#312161',
    fontSize: 24,
    marginBottom: 10
  },
  inputDesc: {
    color: '#312161',
    fontSize: 16
  },
  text: {
    color: '#906cf8',
    fontSize: 16,
    marginBottom: 10
  }
});
