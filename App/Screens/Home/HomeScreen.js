import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../Store/actions/actions';

const HomeScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const loading = useSelector(state => state.loading);
  const fetchProductList = async () => {
    if (!productList.length) await dispatch(getProducts());
  };

  useEffect(() => {
    fetchProductList().then();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text style={styles.home}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
