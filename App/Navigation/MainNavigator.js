import AnimatedTabBar from './AnimatedTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcon from '../Components/SvgIcon';
import HomeScreen from '../Screens/Home/HomeScreen';
import CategoriesScreen from '../Screens/Categories/CategoriesScreen';
import FavoritesSceen from '../Screens/Favorites/FavoritesSceen';
import optionsSceen from '../Screens/OptionsSceen';

const MainNavigator = props => {
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
        name="FavoritesSceen"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: active => (
            <SvgIcon name={active ? 'heartFill' : 'heart'} w={25} h={25} />
          ),
        }}
        component={FavoritesSceen}
      />
      <Tab.Screen
        name="optionsSceen"
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
        component={optionsSceen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
