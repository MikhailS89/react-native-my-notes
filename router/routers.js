import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Main from '../components/pages/Main/Main';
import Info from '../components/pages/Info/Info';
import Favourites from '../components/pages/Favourites/Favourites';
import Settings from '../components/pages/Settings/Settings';
import Add from '../components/pages/Add/Add';

import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigate() {

  const setTabBarIcon = (focused, color, size, name) => {
    if (focused) {
      return (
        <View style={styles.icons.container}>
          <AntDesign name={name} size={30} color={color}/>
          <View style={styles.icons.item}>
            <Entypo name="dot-single" size={30} color={color}/>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.icons.container}>
          <AntDesign name={name} size={30} color={color}/>
        </View>
      )
    }
  }

  return (
      <NavigationContainer style={styles.home}>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={{
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#8a63f8',
              tabBarInactiveTintColor: '#b3a0eb',
              tabBarStyle: { position: 'absolute', height: '10%'}
          }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                  title: 'Главная',
                  headerShown: false,
                  tabBarIcon: ({focused, color, size}) => setTabBarIcon(focused, color, size, 'home')
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                  title: 'Избранное',
                  headerShown: false,
                  tabBarIcon: ({focused, color, size}) => setTabBarIcon(focused, color, size, 'staro')
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                  title: 'Добавление',
                  headerShown: false,
                  tabBarButton: (props) => {

                    // TO DO fucn button add/dell
                    // console.log('tabBarButton: props: ', props)

                    return (
                      <TouchableOpacity style={styles.icons.add} onPress={() => console.log('onPress')}>
                        <AntDesign name="pluscircleo" size={60} color='#b3a0eb' />
                      </TouchableOpacity>
                    )
                  }
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                  title: 'Настройки',
                  headerShown: false,
                  tabBarIcon: ({focused, color, size}) => setTabBarIcon(focused, color, size, 'setting')
                }}
            />
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                  title: 'Инфо',
                  headerShown: false,
                  tabBarIcon: ({focused, color, size}) => setTabBarIcon(focused, color, size, 'infocirlceo')
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icons: {
    container: {
      position: 'relative'
    },
    item: {
      position: 'absolute',
      top: '80%',
      left: 0
    },
    add: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '5%'
    }
  },
  home: {
    flex: 1
  }
});