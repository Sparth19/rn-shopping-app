import AnimatedTabBar from './AnimatedTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcon from '../Components/SvgIcon';
import HomeScreen from '../Screens/Home/HomeScreen';
import CategoriesScreen from '../Screens/Categories/CategoriesScreen';
import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';
import OptionsScreen from '../Screens/OptionsScreen';

const TabNavigator = props => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: active => (
            <SvgIcon name={active ? 'homeFill' : 'home'} w={25} h={25} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="CategoriesScreen"
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: active => (
            <SvgIcon
              name={active ? 'categoryFill' : 'category'}
              w={25}
              h={25}
            />
          ),
        }}
        component={CategoriesScreen}
      />
      <Tab.Screen
        name="FavoritesScreen"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: active => (
            <SvgIcon name={active ? 'heartFill' : 'heart'} w={25} h={25} />
          ),
        }}
        component={FavoritesScreen}
      />
      <Tab.Screen
        name="OptionsScreen"
        options={{
          tabBarLabel: 'More',
          tabBarIcon: active => (
            <SvgIcon
              name={active ? 'moreVerticalFill' : 'moreVertical'}
              w={25}
              h={25}
            />
          ),
        }}
        component={OptionsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
