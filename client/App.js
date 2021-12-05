import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='User'
          component={UserScreen}
          options={{
            title: 'Inscription',
            headerStyle: {
              backgroundColor: '#f4f4f4',
            },
            headerTintColor: '#60B99A',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
