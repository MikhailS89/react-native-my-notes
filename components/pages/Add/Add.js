import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AntDesign, SimpleLineIcons, Entypo  } from '@expo/vector-icons';
import { globalStyle } from '../../../styles/style';
import { generatorKey } from '../../../utils/toobox';
import { useDispatch } from 'react-redux'
import { setDisplay } from '../../../redux/reducer';

export default function Add({ navigation }) {

  const [title, setTile] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()

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
        <View>
            <AntDesign name="close" size={24} color="black" onPress={() => navigation.goBack()}/>
            <View>
                <SimpleLineIcons name="drop" size={24} color="black" />
                <Entypo name="stopwatch" size={24} color="black" />
                <AntDesign name="check" size={24} color="black" />
            </View>
        </View>
        <View>
            <TextInput
                style={styles.input}
                value={title}
                placeholder='Title'
                onChangeText={setTile}
            />
            <TextInput
                style={styles.input}
                value={text}
                multiline
                placeholder='Descripstion'
                onChangeText={setText}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    // flex: 1
  },
  input: {
    // borderWidth: 2,
    // height: 20
  }
});
