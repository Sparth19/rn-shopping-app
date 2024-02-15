import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import ProductCard from '../../Components/ProductCard';
import {useSelector} from 'react-redux';

const FavoritesScreen = props => {
  const {navigation} = props;
  const favList = useSelector(state => state.favourites.favList);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.baseWhite,
      }}>
      <CustomHeader cart navigation={navigation} />
      {favList?.length ? (
        <FlatList
          data={favList}
          numColumns={2}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ProductCard item={item} index={index} navigation={navigation} />
          )}
        />
      ) : (
        <View style={styles.centerView}>
          <Text style={styles.emptyBanner}>No Favourites!</Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBanner: {
    fontFamily: Fonts.Manrope900,
    fontSize: FONT_SIZE.regular_extra,
    color: Colors.black100,
  },
});
