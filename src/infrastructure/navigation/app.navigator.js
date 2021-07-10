import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeArea } from '../../components/utility/safe-area.component';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Map: 'md-map',
};

// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );

// const Settings = () => (
//   <SafeArea>
//     <Text>Settings</Text>
//   </SafeArea>
// );

const Tab = createBottomTabNavigator();

const tabBarIcon = (iconName) => ({ size, color }) => (
  <Ionicons name={iconName} size={size} color={color} />
);

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return { tabBarIcon: tabBarIcon(iconName) };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
