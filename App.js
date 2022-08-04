import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './src/Pages/Home'

export default function App() {
  return (
    <>
    <StatusBar style="light" backgroundColor='#000' translucent />
    <Home />
    </>
  );
}

