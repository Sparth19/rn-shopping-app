import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import CustomHeader from '../../Components/CustomHeader';
import Metrics from '../../Themes/Metrics';
import Carousel from 'react-native-reanimated-carousel';
import SvgIcon from '../../Components/SvgIcon';

const ProductDetailsScreen = props => {
  const {navigation} = props;
  const {item} = props.route.params;
  console.log('props', item);

  const renderCarouselItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: item}}
          style={styles.sliderImage}
          resizeMode={'cover'}
        />
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => alert('press')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          style={styles.favView}>
          <SvgIcon name={'favEmpty'} w={20} h={20} style={styles.shadowStyle} />
        </TouchableOpacity>
        <Carousel
          loop
          width={Metrics.width}
          height={Metrics.rfv(200)}
          autoPlay
          data={item.images}
          scrollAnimationDuration={2000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={renderCarouselItem}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.baseWhite,
        paddingVertical: Metrics.rfv(20),
      }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.baseWhite}
        barStyle={'dark-content'}
      />
      <CustomHeader cart navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.titleText}>{item.title || ''}</Text>
        </View>
        <View>
          <Text>rating bar</Text>
        </View>
        <View>{renderCarousel()}</View>
        <View style={{flexDirection: 'row', margin: Metrics.rfv(20)}}>
          <Text style={styles.priceText}>${item.price}</Text>
          <View style={styles.disView}>
            <Text style={styles.discountText}>
              {item.discountPercentage}% OFF
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: Metrics.rfv(20)}}>
          <TouchableOpacity onPress={() => {}} style={styles.addBtnView}>
            <Text style={styles.addBtnText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buyView}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{margin: Metrics.rfv(20)}}>
          <Text style={styles.descLabel}>Details</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  titleText: {
    fontSize: FONT_SIZE.regular_extra,
    color: Colors.black100,
    fontFamily: Fonts.Manrope700,
    marginHorizontal: Metrics.rfv(20),
  },
  sliderImage: {
    width: Metrics.width,
    height: Metrics.rfv(200),
  },
  priceText: {
    fontSize: FONT_SIZE.medium_extra,
    color: Colors.black100,
    fontFamily: Fonts.Manrope700,
  },
  discountText: {
    fontSize: FONT_SIZE.small_medium,
    color: Colors.baseWhite,
    fontFamily: Fonts.Manrope400,
  },
  disView: {
    backgroundColor: Colors.mainTheme2,
    marginHorizontal: Metrics.rfv(10),
    paddingHorizontal: Metrics.rfv(10),
    borderRadius: Metrics.rfv(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: Colors.mainTheme2,
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.small_medium,
  },
  addBtnView: {
    borderRadius: Metrics.rfv(20),
    borderWidth: Metrics.rfv(1),
    borderColor: Colors.mainTheme2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.rfv(15),
    marginRight: Metrics.rfv(15),
  },
  buyText: {
    color: Colors.baseWhite,
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.small_medium,
  },
  descLabel: {
    color: Colors.black100,
    fontFamily: Fonts.Manrope500,
    fontSize: FONT_SIZE.small_medium,
  },
  descText: {
    color: Colors.black60,
    fontFamily: Fonts.Manrope400,
    fontSize: FONT_SIZE.small_medium,
  },
  buyView: {
    borderRadius: Metrics.rfv(20),
    borderWidth: Metrics.rfv(1),
    borderColor: Colors.baseWhite,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.rfv(15),
    backgroundColor: Colors.mainTheme2,
  },
  favView: {
    height: Metrics.rfv(40),
    width: Metrics.rfv(40),
    backgroundColor: Colors.baseWhite,
    position: 'absolute',
    top: Metrics.rfv(10),
    right: Metrics.rfv(10),
    zIndex: 1,
    borderRadius: Metrics.rfv(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
