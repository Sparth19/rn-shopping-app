import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';
import SvgIcon from './SvgIcon';
import Metrics from '../Themes/Metrics';

const OfferCard = props => {
  const {item, index} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <SvgIcon name={'dummyWhite'} w={70} h={70} />
      </View>
      <View style={styles.rightView}>
        <Text style={styles.firstText}>Get</Text>
        <Text style={styles.secText}>50% OFF</Text>
        <Text style={styles.thirdText}>
          On first{' '}
          <Text style={{...styles.thirdText, fontFamily: Fonts.Manrope700}}>
            03
          </Text>{' '}
          order
        </Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  firstText: {
    fontFamily: Fonts.Manrope400,
    color: Colors.baseWhite,
    fontSize: FONT_SIZE.regular,
  },
  secText: {
    fontFamily: Fonts.Manrope900,
    color: Colors.baseWhite,
    fontSize: FONT_SIZE.large,
  },
  thirdText: {
    fontFamily: Fonts.Manrope500,
    color: Colors.baseWhite,
    fontSize: FONT_SIZE.medium_extra,
  },
  mainView: {
    flex: 1,
    height: Metrics.rfv(120),
    borderRadius: Metrics.rfv(16),
    backgroundColor: Colors.secTheme1,
    width: Metrics.width - Metrics.rfv(100),
    marginLeft: Metrics.rfv(20),
    marginVertical: Metrics.rfv(20),
    flexDirection: 'row',
  },
  imageView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    flex: 0.6,
    justifyContent: 'center',
  },
});
