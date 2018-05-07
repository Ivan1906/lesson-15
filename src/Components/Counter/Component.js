import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Touchable = ({ count, increment, decrement }) => {
    <View style={styles.container}>
        <Text style={styles.countField}>{count}</Text>
        <TouchableOpacity style={styles.botton} onPress={increment}>
            <Text style={styles.buttonText}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botton} onPress={decrement}>
            <Text style={styles.buttonText}>DECREMENT</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    countField: {
      color: 'red',
      padding: 10,
      fontSize: 30
    },
    botton: {
      backgroundColor: 'grey',
      margin: 10,
      padding: 20,
    },
    buttonText: {
      color: 'black',
      fontSize: 16
    }
});  