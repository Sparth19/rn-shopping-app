import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoriesScreen = () => {
    return (
        <View style={{
            backgroundColor: 'red', flex: 1, justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={styles.category}>Categories Screen</Text>
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    category: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }
});
