
import React, { useEffect, useState } from 'react';
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
import Header from './src/Components/Header';
import DropDown from './src/Components/DropDown';
import Home from './src/screens/Home';
import Results from './src/screens/Results';
import Programs from './src/screens/Programs';
import Settings from './src/screens/Settings';
import Support from './src/screens/Support';



function App() {
  const [start, setStart] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const [screen, setScreen] = useState('Results');
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    console.log(screen);
    setVisible(false);
  }, [screen]);

  return (
    <View style={styles.container}>
      {!start ? (
        <Home setMyState={setStart}></Home>
      ) : (
        <>
          <Header changeScreen={screen} toggleMenu={toggleMenu}></Header>
          {screen === 'Results' ? <Results /> : null}
          {screen === 'Programs' ? <Programs /> : null}
          {screen === 'Settings' ? <Settings /> : null}
          {screen === 'Support' ? <Support /> : null}
          {visible ? <DropDown changeScreen={setScreen}></DropDown> : null}
        </>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
