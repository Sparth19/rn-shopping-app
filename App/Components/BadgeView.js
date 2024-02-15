import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Metrics from '../Themes/Metrics';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';

const BadgeView = ({count, borderWhite}) => {
  return (
    <View
      style={{
        ...styles.badgeView,
        borderColor: borderWhite ? Colors.baseWhite : Colors.mainTheme2,
      }}>
      <Text style={styles.badgeText}>{count || 0}</Text>
    </View>
  );
};

export default BadgeView;

const styles = StyleSheet.create({
  badgeView: {
    height: Metrics.rfv(25),
    width: Metrics.rfv(25),
    borderRadius: Metrics.rfv(15),
    position: 'absolute',
    backgroundColor: Colors.secTheme1,
    bottom: Metrics.rfv(8),
    left: Metrics.rfv(8),
    borderWidth: Metrics.rfv(2),
    borderColor: Colors.mainTheme2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: Fonts.Manrope900,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.baseWhite,
  },
});
