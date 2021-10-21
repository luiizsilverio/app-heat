import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { StatusBar } from "expo-status-bar";

import {
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading /> 
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
