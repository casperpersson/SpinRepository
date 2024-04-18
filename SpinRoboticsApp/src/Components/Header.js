
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import picture from '../assets/spin-logo-medium.png';


export default function Header({changeScreen, toggleMenu}) {
    const [screen, setScreen] = useState('');

    useEffect(() => {
        setScreen(changeScreen);
    }, [changeScreen]);

    return (
        <View style={styles.container}>
            <Image source={picture} style={styles.image} />
            <Text style={styles.text}>{screen}</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Icon name='navicon' size={30} color="#000"></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 50,
    },
    text: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    menuContainer: {
        position: 'absolute',
        right: 10,
    },
    menuContainer1: {
        position: 'absolute',
        backgroundColor: '#F5FCFF',
        right: 40,
        zIndex: 1,
        
    },
    menuText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        marginRight: -100,
        marginLeft: 10,
        width: 100,
        height: 24,
    }
});