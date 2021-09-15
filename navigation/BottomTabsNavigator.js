import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ShowsScreen from "../screens/shows/ShowsScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ShowsStackNavigator from "./ShowsStackNavigator";
import ActorsStackNavigator from "./ActorsStackNavigator";

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator shifting={true} activeColor="#f0edf6">
      <BottomTab.Screen
        name="ShowsTab"
        component={ShowsStackNavigator}
        options={{
          tabBarColor: "#1a759f",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={26}
            ></MaterialCommunityIcons>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="ActorsTab"
        component={ActorsStackNavigator}
        options={{
          tabBarColor: "#1a759f",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-search"
              color={color}
              size={26}
            ></MaterialCommunityIcons>
          ),
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;
