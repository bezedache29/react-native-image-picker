import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from '../screens/HomePage'

export default function AppRouter() {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>
  )
}