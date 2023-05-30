import * as React from 'react';
import Main from '../components/pages/Main';
import Contacts from '../components/pages/Contacts';
import Favourites from '../components/pages/Favourites';
import Settings from '../components/pages/Settings';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: 'Главная' }}
            />
            <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{ title: 'Контакты' }}
            />
            <Stack.Screen
                name="Favourites"
                component={Favourites}
                options={{ title: 'Избранное' }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ title: 'Настройки' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }