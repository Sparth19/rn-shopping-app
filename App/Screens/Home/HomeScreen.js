import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View style={{
            backgroundColor: 'red', flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={styles.home}>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }
});


