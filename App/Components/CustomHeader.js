import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgIcon from './SvgIcon';
import Metrics from '../Themes/Metrics';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';

const CustomHeader = props => {
  const {cart, navigation, amount = 0, showTitle = false} = props;

  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: Metrics.rfv(20),
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.backView}
          onPress={() => navigation.goBack()}>
          <SvgIcon name={'backBtn'} w={15} h={15} />
        </TouchableOpacity>

        {showTitle ? (
          <Text style={styles.titleText}>{`Shopping Cart (${amount})`}</Text>
        ) : null}
      </View>
      {cart ? (
        <TouchableOpacity onPress={() => alert('cart')}>
          <SvgIcon name={'bagBlack'} w={20} h={20} />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  backView: {
    backgroundColor: Colors.black10,
    width: Metrics.rfv(40),
    height: Metrics.rfv(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.rfv(40),
  },
  titleText: {
    fontSize: FONT_SIZE.medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope500,
    marginLeft: Metrics.rfv(20),
  },
});
