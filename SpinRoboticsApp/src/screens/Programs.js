import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';

export default function Programs() {
    // const navigation = useNavigation();

    // // Set the header right button to a logout button
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity title='Hi' >
    //                 <Text>Logout</Text>
    //             </TouchableOpacity>
    //         ),

    //     });
    // }, [navigation]);
    
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Programs</Text>
            <Button title="Go to Results" onPress={() => navigation.navigate('Results')} />
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});