import * as React from 'react';
import Main from './components/Main';
import Contacts from './components/Contacts';

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }