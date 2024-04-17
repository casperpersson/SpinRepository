/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {RootStackParamList} from '../app.navigator';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

interface HomeProps {
  setMyState: Dispatch<SetStateAction<boolean>>;
}


function Home({setMyState}: HomeProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
          
        <Image
        style={styles.Logo}
        source={require('../assets/spin-roboticsweb.jpg')}
        />
        <Text style={[styles.Big, {color: isDarkMode ? Colors.white : Colors.black}]}>Velkommen til spin robitics nye App!!😎😎</Text>
      </View>
      <View style={[styles.view,{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }]}>
      <TouchableOpacity style={styles.startButton} onPress={() => setMyState(true)}>
        <Text>Press me!</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  Big: {
    fontWeight: 'bold',
    fontSize: 34,
    textAlign: 'center' 
  },
  Logo: {
    width: 400,
    height: 200
    
    },
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  container: {
    paddingTop: 50,
  },
  startButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
  },
});

export default Home;