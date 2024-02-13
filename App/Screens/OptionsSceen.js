import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OptionsSceen = () => {
    return (
        <View style={{
            backgroundColor: 'red', flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={styles.more}>Options Screen</Text>
        </View>
    );
};

export default OptionsSceen;

const styles = StyleSheet.create({
    more: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }
});