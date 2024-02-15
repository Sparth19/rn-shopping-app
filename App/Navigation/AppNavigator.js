import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '././TabNavigator';
import ProductDetailsScreen from '../Screens/Home/ProductDetailsScreen';
import CartScreen from '../Screens/Home/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
