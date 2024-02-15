import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';

const OptionsScreen = () => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.labelText}>Options Screen</Text>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontFamily: Fonts.Manrope900,
    fontSize: FONT_SIZE.regular_extra,
    color: Colors.black100,
  },
});
