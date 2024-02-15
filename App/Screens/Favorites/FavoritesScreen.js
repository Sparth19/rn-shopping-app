import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FavoritesScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.favorites}>Favorites Screen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  favorites: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
