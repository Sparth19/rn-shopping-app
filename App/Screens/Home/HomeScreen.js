import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../Store/actions/actions';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import SvgIcon from '../../Components/SvgIcon';
import Metrics from '../../Themes/Metrics';
import OfferCard from '../../Components/OfferCard';
import ProductCard from '../../Components/ProductCard';

const HomeScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const productList = useSelector(state => state.productList);
  const loading = useSelector(state => state.loading);
  const fetchProductList = async () => {
    if (!productList.length) await dispatch(getProducts());
  };

  useEffect(() => {
    fetchProductList().then();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.mainTheme2,
      }}>
      <StatusBar animated={true} backgroundColor={Colors.mainTheme2} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/*top header*/}
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.mainTheme2,
            paddingHorizontal: Metrics.rfv(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.rfv(10),
            }}>
            <Text style={styles.headerText}>Hey, Rahul</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              <SvgIcon name={'bagWhite'} w={22} h={22} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.mainTheme1,
              borderRadius: Metrics.rfv(28),
              marginVertical: Metrics.rfv(30),
              padding: Metrics.rfv(15),
            }}>
            <SvgIcon name={'searchWhite'} w={22} h={22} />
            <TextInput
              value={searchText}
              onChangeText={value => setSearchText(value)}
              placeholder={'Search products or store'}
              placeholderTextColor={Colors.black45}
              style={{
                fontSize: FONT_SIZE.medium,
                color: Colors.black45,
                fontFamily: Fonts.Manrope500,
                marginHorizontal: Metrics.rfv(10),
                paddingVertical: 0,
                flex: 1,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: Metrics.rfv(10),
            }}>
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

        <View style={{backgroundColor: Colors.baseWhite, flex: 1}}>
          {/*  offer list horizontal*/}
          <View style={{}}>
            <FlatList
              data={['1', '2', '3']}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => <OfferCard />}
            />
          </View>
          <Text style={styles.header}>Recommended</Text>
          <View style={{}}>
            <FlatList
              data={productList}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <ProductCard
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
  optionText: {
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.baseWhite,
    marginRight: Metrics.rfv(5),
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
});
