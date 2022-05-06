import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from '../screens/HomePage'
import CameraPage from '../screens/CameraPage'
import { createStackNavigator } from '@react-navigation/stack';


export default function AppRouter() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" gestureEnabled="true">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Camera" component={CameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}