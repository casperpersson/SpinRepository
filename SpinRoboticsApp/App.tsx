
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
 
import AppNavigator from './src/app.navigator';
import Home from './src/screens/Home';



function App() {
  const [start, setStart] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    !start ? (
      <Home setMyState={setStart}></Home>
    ) : (
    
      <AppNavigator></AppNavigator>
    )
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
