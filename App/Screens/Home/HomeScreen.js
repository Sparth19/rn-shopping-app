import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../Store/actions/productActions';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import SvgIcon from '../../Components/SvgIcon';
import Metrics from '../../Themes/Metrics';
import OfferCard from '../../Components/OfferCard';
import ProductCard from '../../Components/ProductCard';
import {getTotalQuantity} from '../../Utils/Functions';
import BadgeView from '../../Components/BadgeView';

const HomeScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const productList = useSelector(state => state.products.productList);
  const cartList = useSelector(state => state.cart.cartList);
  const loading = useSelector(state => state.products.loading);

  const fetchProductList = async () => {
    if (!productList.length) await dispatch(getProducts());
  };

  useEffect(() => {
    fetchProductList().then();
  }, []);

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar animated={true} backgroundColor={Colors.mainTheme2} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <View style={styles.topView}>
            <Text style={styles.headerText}>Hey, Rahul</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              <SvgIcon name={'bagWhite'} w={22} h={22} />
              <BadgeView count={getTotalQuantity(cartList)} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchView}>
            <SvgIcon name={'searchWhite'} w={22} h={22} />
            <TextInput
              value={searchText}
              onChangeText={value => setSearchText(value)}
              placeholder={'Search products or store'}
              placeholderTextColor={Colors.black45}
              style={styles.textInput}
            />
          </View>

          <View style={styles.addView}>
            <View>
              <Text style={styles.labelText}>DELIVERY TO</Text>
              <View style={styles.centerRow}>
                <Text style={styles.optionText}>Green Way 3000, Sylhet</Text>
                <SvgIcon name={'dropdownWhite'} w={14} h={14} />
              </View>
            </View>

            <View>
              <Text style={styles.labelText}>WITHIN</Text>
              <View style={styles.centerRow}>
                <Text style={styles.optionText}>1 Hour</Text>
                <SvgIcon name={'dropdownWhite'} w={14} h={14} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.flexView}>
          <View>
            <FlatList
              data={['1', '2', '3', '4', '5']}
              horizontal
              initialNumToRender={5}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => <OfferCard />}
            />
          </View>
          <Text style={styles.header}>Recommended</Text>
          <View style={{flex: 1}}>
            {loading || !productList ? (
              <View style={styles.loader}>
                <ActivityIndicator size={'large'} color={Colors.mainTheme1} />
              </View>
            ) : (
              <FlatList
                data={productList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <ProductCard
                    item={item}
                    index={index}
                    navigation={navigation}
                  />
                )}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: Colors.mainTheme2,
  },
  headerText: {
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.regular_extra,
    color: Colors.baseWhite,
  },
  labelText: {
    fontFamily: Fonts.Manrope900,
    fontSize: FONT_SIZE.small,
    color: Colors.black20,
    letterSpacing: 0.3,
  },
  headerView: {
    flex: 1,
    backgroundColor: Colors.mainTheme2,
    paddingHorizontal: Metrics.rfv(20),
  },
  optionText: {
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.baseWhite,
    marginRight: Metrics.rfv(5),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.rfv(10),
  },
  header: {
    fontFamily: Fonts.Manrope400,
    fontSize: FONT_SIZE.regular_extra,
    color: Colors.black90,
    marginHorizontal: Metrics.rfv(20),
  },
  centerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.mainTheme1,
    borderRadius: Metrics.rfv(28),
    marginVertical: Metrics.rfv(30),
    padding: Metrics.rfv(15),
  },
  textInput: {
    fontSize: FONT_SIZE.medium,
    color: Colors.black45,
    fontFamily: Fonts.Manrope500,
    marginHorizontal: Metrics.rfv(10),
    paddingVertical: 0,
    flex: 1,
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.rfv(10),
  },
  flexView: {
    backgroundColor: Colors.baseWhite,
    flex: 1,
  },
  loader: {
    flex: 1,
    backgroundColor: Colors.baseWhite,
    alignItems: 'center',
    height: Metrics.height,
    paddingTop: Metrics.rfv(100),
  },
});
