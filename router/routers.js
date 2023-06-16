import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from '../components/pages/Main/Main';
import Info from '../components/pages/Info/Info';
import Favourites from '../components/pages/Favourites/Favourites';
import Settings from '../components/pages/Settings/Settings';
import TabBarButtonCenter from '../components/TabBarButtonCenter/TabBarButtonCenter';
import Add from '../components/pages/Add/Add';
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const SIZE_TAB = 40

export default function Navigate() {

  const setMargin = (name) => {
    if (name === 'home') {
      return { marginLeft: 10 }
    // } else if (name === 'staro') {
    //   return { marginRight: 0 }
    // } else if (name === 'setting') {
    //   return { marginLeft: 0 }
    } else if (name === 'infocirlceo') {
      return { marginRight: 10 }
    } else {
      return { margin: 0 }
    }
  }

  const setTabBarIcon = (focused, color, size, name) => {
    if (focused) {
      return (
        <View style={[styles.tabBarContainer, { ...setMargin(name) }]}>
          <AntDesign name={name} size={SIZE_TAB} color={color}/>
          <View style={[styles.tabBarItem]}>
            <Entypo name="dot-single" size={SIZE_TAB} color={color}/>
          </View>
        </View>
      )
    } else {
      return (
        <View style={[styles.tabBarContainer, { opacity: 0.5, ...setMargin(name) }]}>
          <AntDesign name={name} size={SIZE_TAB} color={color}/>
        </View>
      )
    }
  }

  const display = useSelector(state => state.display);

  return (
      <NavigationContainer style={styles.home}>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={{
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#312161',
              tabBarInactiveTintColor: '#312161',
              tabBarStyle: { position: 'absolute', height: '10%', display: display }
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
                // children={()=><Add propName={'TO DO TO DO !!!'}/>}
                component={Add}
                options={{
                  title: 'Add',
                  headerShown: false,
                  tabBarIcon: () => <TabBarButtonCenter/>
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
  tabBarContainer: {
    position: 'relative',
  },
  tabBarItem: {
    position: 'absolute',
    top: '70%',
    left: 0
  },
  home: {
    flex: 1
  }
});