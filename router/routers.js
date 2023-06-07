import * as React from 'react';

import Main from '../components/pages/Main/Main';
import Contacts from '../components/pages/Info/Info';
import Favourites from '../components/pages/Favourites/Favourites';
import Settings from '../components/pages/Settings/Settings';
import Add from '../components/pages/Add/Add';

import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            }}
          >
              <Tab.Screen
                  name="Main"
                  component={Main}
                  options={{
                    title: 'Главная',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        return <AntDesign name="home" size={36} color={color}/>
                    }
                }}
              />
              <Tab.Screen
                  name="Favourites"
                  component={Favourites}
                  options={{
                    title: 'Избранное',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="staro" size={36} color={color}/>
                    )
                }}
              />
              <Tab.Screen
                  name="Add"
                  component={Add}
                  options={{
                    title: 'Добавление',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="pluscircleo" size={36} color={color} />
                    )
                }}
              />
              <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    title: 'Настройки',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="setting" size={36} color={color}/>
                    )
                }}
              />
              <Tab.Screen
                  name="Info"
                  component={Contacts}
                  options={{
                    title: 'Инфо',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="infocirlceo" size={36} color={color}/>
                    )
                }}
              />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }