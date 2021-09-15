import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ShowsSearchScreen from "../screens/shows/ShowsSearchScreen.js";

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator"  component={BottomTabsNavigator} options={{headerShown:false,title:"TvMaze app",headerTintColor:'orange',headerStyle:{backgroundColor:'black'}}} ></Stack.Screen>
        <Stack.Screen name="ShowsSearchScreen" component={ShowsSearchScreen} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
