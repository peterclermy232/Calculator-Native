// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
// import Cat from './react-comps/Cat';
import { StyleSheet, Text, View, Button } from 'react-native';
import Mains from './calcutor-com/Main-calculator';

export default function App() {
  return (
    <Mains />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
