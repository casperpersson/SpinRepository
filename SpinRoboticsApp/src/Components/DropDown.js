import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DropDown({changeScreen}) {
    return(
        <View style={styles.menuContainer1}>
            <TouchableOpacity onPress={() => changeScreen('Results')} >
                <Text style={styles.menuText}>Results</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeScreen('Programs')}>
                <Text style={styles.menuText}>Programs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeScreen('Settings')}>
                <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeScreen('Support')}>
                <Text style={styles.menuText}>Support</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer1: {
        position: 'absolute',
        right: 0,
        backgroundColor: '#F5FCFF',
        // width: 100,
        // height: 100,
        marginTop: 50,
        
    },
    menuText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,

    }
});