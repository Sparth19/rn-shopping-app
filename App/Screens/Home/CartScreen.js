import React from 'react';
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
import {useSelector} from 'react-redux';
import SvgIcon from '../../Components/SvgIcon';
import Metrics from '../../Themes/Metrics';

const CartScreen = props => {
  const {navigation} = props;
  const productList = useSelector(state => state.productList);
  const renderCartItem = ({item, index}) => {
    return (
      <View style={styles.cartView}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: item.thumbnail}}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={{flex: 1}}>
            <Text style={styles.titleText} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: Metrics.rfv(10),
          }}>
          <TouchableOpacity style={styles.opView} onPress={() => {}}>
            <SvgIcon name={'minus'} w={25} h={25} />
          </TouchableOpacity>
          <Text style={styles.countText}>7</Text>
          <TouchableOpacity style={styles.opView} onPress={() => {}}>
            <SvgIcon name={'plusDark'} w={25} h={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.baseWhite,
      }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.baseWhite}
        barStyle={'dark-content'}
      />
      <CustomHeader navigation={navigation} showTitle amount={5} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={productList}
        renderItem={renderCartItem}
      />
      <View
        style={{
          backgroundColor: Colors.black10,
          margin: Metrics.rfv(10),
          padding: Metrics.rfv(20),
          borderRadius: Metrics.rfv(30),
        }}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Subtotal</Text>
          <Text style={styles.totalRight}>$7980</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Delivery</Text>
          <Text style={styles.totalRight}>$2.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Total</Text>
          <Text style={{...styles.totalRight, fontFamily: Fonts.Manrope700}}>
            $7980
          </Text>
        </View>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>Proceed to checkout</Text>
        </View>
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
});
