import { FontAwesome } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import { tabBarOptions } from "./styles";

const Router: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const options = (
    label: string,
    iconName: any
  ): BottomTabNavigationOptions => ({
    tabBarLabel: label,
    tabBarIcon: ({ color }) => (
      <FontAwesome name={iconName} color={color} size={22} />
    ),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Search"
          component={Search}
          options={options("Buscar", "search")}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={options("Favoritos", "star")}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
