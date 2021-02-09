import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";

const FavoritesStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Router: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="FavoritesStack" component={FavoritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
