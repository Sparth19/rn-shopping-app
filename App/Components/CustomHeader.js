import React, {useMemo} from 'react';
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
import BadgeView from './BadgeView';
import {getTotalQuantity} from '../Utils/Functions';
import {useSelector} from 'react-redux';

const CustomHeader = props => {
  const {cart, navigation, showTitle = false} = props;
  const cartList = useSelector(state => state.cart.cartList);

  const bagCount = useMemo(() => {
    return getTotalQuantity(cartList);
  }, [cartList]);

  const handleNavigateCart = () => navigation.navigate('CartScreen');

  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.rowCenter}>
        <TouchableOpacity
          style={styles.backView}
          onPress={() => navigation.goBack()}>
          <SvgIcon name={'backBtn'} w={15} h={15} />
        </TouchableOpacity>

        {showTitle ? (
          <Text style={styles.titleText}>{`Shopping Cart (${bagCount})`}</Text>
        ) : null}
      </View>
      {cart ? (
        <TouchableOpacity onPress={handleNavigateCart}>
          <SvgIcon name={'bagBlack'} w={22} h={22} />
          <BadgeView count={bagCount} borderWhite />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  screenView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Metrics.rfv(20),
  },
  rowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
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
