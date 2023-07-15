import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SvgHome from '../elements/icons/Home';
import SvgMyPlants from '../elements/icons/MyPlants';
import SvgFavorite from '../elements/icons/Favorite';
import PlantsScreen from '../screens/Plants';
import MyPlantsScreen from '../screens/MyPlants';
import FavoritesScreen from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState('Plants');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Plants"
        component={PlantsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgHome
                fill={focused ? '#004643' : 'none'}

               
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyPlants"
        component={MyPlantsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <SvgMyPlants fill={focused ? '#004643' : 'none'} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <SvgFavorite fill={focused ? '#004643' : 'none'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    width: 350,
    overflow: 'hidden', 
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default TabNavigator;
