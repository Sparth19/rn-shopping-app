import React, {useMemo} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import {useDispatch, useSelector} from 'react-redux';
import SvgIcon from '../../Components/SvgIcon';
import Metrics from '../../Themes/Metrics';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../Store/reducers/cartSlice';
import {currencyFormat, getTotalPrice} from '../../Utils/Functions';

const CartScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cartList);

  const totalPrice = useMemo(() => {
    return getTotalPrice(cartList);
  }, [cartList]);

  console.log(totalPrice);

  const deliveryCharge = totalPrice > 0 ? 2 : 0;

  const handleIncrement = id => dispatch(incrementQuantity(id));
  const handleDecrement = id => dispatch(decrementQuantity(id));

  const renderCartItem = ({item, index}) => {
    return (
      <View style={styles.cartView} key={index.toString()}>
        <View style={styles.rowCenter}>
          <Image
            source={{uri: item.thumbnail}}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={{flex: 1}}>
            <Text style={styles.titleText} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.priceText}>{currencyFormat(item.price)}</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity
            style={styles.opView}
            onPress={() => handleDecrement(item.id)}>
            <SvgIcon
              name={item.quantity === 1 ? 'trash' : 'minus'}
              w={25}
              h={25}
            />
          </TouchableOpacity>
          <Text style={styles.countText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.opView}
            onPress={() => handleIncrement(item.id)}>
            <SvgIcon name={'plusDark'} w={25} h={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screenView}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.baseWhite}
        barStyle={'dark-content'}
      />
      <CustomHeader navigation={navigation} showTitle />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={cartList}
        initialNumToRender={10}
        renderItem={renderCartItem}
      />
      <View style={styles.bottomView}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Subtotal</Text>
          <Text style={styles.totalRight}>{currencyFormat(totalPrice)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Delivery</Text>
          <Text style={styles.totalRight}>
            {currencyFormat(deliveryCharge)}
          </Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Total</Text>
          <Text style={{...styles.totalRight, fontFamily: Fonts.Manrope700}}>
            {currencyFormat(totalPrice + deliveryCharge)}
          </Text>
        </View>
        {totalPrice > 0 ? (
          <TouchableOpacity style={styles.btnView} onPress={() => {}}>
            <Text style={styles.btnText}>Proceed to checkout</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  opView: {
    height: Metrics.rfv(35),
    width: Metrics.rfv(35),
    backgroundColor: Colors.black01,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.rfv(20),
  },
  countText: {
    fontSize: FONT_SIZE.medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope500,
    marginHorizontal: Metrics.rfv(10),
  },
  titleText: {
    flex: 1,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope500,
  },
  priceText: {
    fontSize: FONT_SIZE.small_medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope400,
    marginTop: Metrics.rfv(5),
  },
  image: {
    height: Metrics.rfv(40),
    width: Metrics.rfv(40),
    marginHorizontal: Metrics.rfv(20),
    borderRadius: Metrics.rfv(10),
  },
  cartView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.rfv(10),
    borderBottomWidth: Metrics.rfv(1),
    borderColor: Colors.black01,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.rfv(20),
    marginVertical: Metrics.rfv(2),
  },
  totalLeft: {
    fontSize: FONT_SIZE.small_medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope400,
  },
  totalRight: {
    fontSize: FONT_SIZE.small_medium,
    color: Colors.black100,
    fontFamily: Fonts.Manrope500,
  },
  btnText: {
    fontSize: FONT_SIZE.small_medium,
    color: Colors.baseWhite,
    fontFamily: Fonts.Manrope500,
  },
  btnView: {
    backgroundColor: Colors.mainTheme2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.rfv(15),
    marginTop: Metrics.rfv(20),
    borderRadius: Metrics.rfv(20),
  },
  rowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics.rfv(10),
  },
  screenView: {
    flex: 1,
    backgroundColor: Colors.baseWhite,
  },
  bottomView: {
    backgroundColor: Colors.black10,
    margin: Metrics.rfv(10),
    padding: Metrics.rfv(20),
    borderRadius: Metrics.rfv(30),
  },
});
