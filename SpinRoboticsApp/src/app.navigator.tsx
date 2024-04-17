import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './screens/Home';
import Results from './screens/Results';
import Programs from './screens/Programs';
import Settings from './screens/Settings';
import Support from './screens/Support';



const { Navigator, Screen } = createNativeStackNavigator();


function AppNavigator() {
    return(
    <NavigationContainer>
        <Navigator initialRouteName='Results'>
            <Screen name="Results" component={Results} />
            <Screen name="Programs" component={Programs} />
            <Screen name="Settings" component={Settings} />
            <Screen name="Support" component={Support} />
        </Navigator>
    </NavigationContainer>
    )
};

export type RootStackParamList = {
    Home: undefined;
    Programs: undefined;
    // Tilføj andre skærme her
  };

export default AppNavigator;