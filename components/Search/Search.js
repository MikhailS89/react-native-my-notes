import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Search() {
  const [text, onChangeText] = React.useState('');
  const [opacity, setOpacity] = React.useState(0); // TO DO определение скрыт ли инпут
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    setOpacity(1);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    setOpacity(0);
    onChangeText('');

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animWrap, { opacity: fadeAnim }]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter the title"
          onBlur={fadeOut}
        />
      </Animated.View>
      <Feather style={styles.icon} name="search" size={30} color="#918d8d" onPress={fadeIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 10
  },
  input: {
    borderBottomWidth: 3,
    borderColor: '#918d8d',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  icon: {
    paddingLeft: 10,
    paddingVertical: 5
  },
  animWrap: {
    height: '100%',
    position: 'relative',
    flex: 1,
    width: '100%'
  }
});
