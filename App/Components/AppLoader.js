import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../Themes/AppTheme';

const AppLoader = () => {
  return (
    <View style={styles.centerView}>
      <ActivityIndicator size={'large'} color={Colors.mainTheme1} />
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.baseWhite,
  },
});
