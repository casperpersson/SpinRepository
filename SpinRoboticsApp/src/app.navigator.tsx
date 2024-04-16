import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Results from './screens/Results';

const { Navigator, Screen } = createNativeStackNavigator();

function AppNavigator() {
    return(
    <NavigationContainer>
        <Navigator initialRouteName='Results'>
            <Screen name="Results" component={Results} />
        </Navigator>
    </NavigationContainer>
    )
};

export default AppNavigator;