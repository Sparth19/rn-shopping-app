import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';
import Metrics from '../Themes/Metrics';
import SvgIcon from './SvgIcon';

const ProductCard = props => {
  const {item, index, navigation} = props;
  const handleNavigation = item => {
    navigation.navigate('ProductDetailsScreen', {item});
  };

  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => handleNavigation(item)}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.thumbnail}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>

      <View style={styles.bottomView}>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>${item?.price}</Text>
          <TouchableOpacity
            style={styles.plusView}
            onPress={() => {}}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <SvgIcon name={'plus'} w={15} h={15} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText} numberOfLines={1}>
          {item?.title}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => alert('press')}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={{...styles.favView, ...styles.shadowStyle}}>
        <SvgIcon name={'favEmpty'} w={20} h={20} style={styles.shadowStyle} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.black10,
    height: Metrics.rfv(200),
    marginLeft: Metrics.rfv(20),
    marginVertical: Metrics.rfv(10),
    width: Metrics.width / 2 - Metrics.rfv(30),
    alignSelf: 'center',
    borderRadius: Metrics.rfv(12),
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  priceText: {
    fontFamily: Fonts.Manrope700,
    color: Colors.black100,
    fontSize: FONT_SIZE.small_medium,
  },
  titleText: {
    fontFamily: Fonts.Manrope400,
    color: Colors.black100,
    fontSize: FONT_SIZE.small,
    marginTop: Metrics.rfv(3),
  },
  plusView: {
    backgroundColor: Colors.mainTheme1,
    height: Metrics.rfv(25),
    width: Metrics.rfv(25),
    borderRadius: Metrics.rfv(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favView: {
    position: 'absolute',
    top: Metrics.rfv(10),
    left: Metrics.rfv(10),
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomView: {
    marginTop: Metrics.rfv(5),
    margin: Metrics.rfv(10),
  },
});
