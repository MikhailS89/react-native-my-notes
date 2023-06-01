import * as React from 'react';
import Main from '../components/pages/Main/Main';
// import Contacts from '../components/pages/Contacts/Contacts';
import Favourites from '../components/pages/Favourites/Favourites';
import Settings from '../components/pages/Settings/Settings';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigate() {

    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen
    //             name="Main"
    //             component={Main}
    //             options={{ title: 'Главная' }}
    //         />
    //         <Stack.Screen
    //             name="Contacts"
    //             component={Contacts}
    //             options={{ title: 'Контакты' }}
    //         />
    //         <Stack.Screen
    //             name="Favourites"
    //             component={Favourites}
    //             options={{ title: 'Избранное' }}
    //         />
    //         <Stack.Screen
    //             name="Settings"
    //             component={Settings}
    //             options={{ title: 'Настройки' }}
    //         />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // );

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Main"
                    component={Main}
                    // options={{ header: false }}
                />
                <Tab.Screen
                    name="Favourites"
                    component={Favourites}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }