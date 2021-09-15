import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShowsScreen from "../screens/shows/ShowsScreen";
import ShowInfoScreen from "../screens/shows/ShowInfoScreen";
import EpisodeInfoScreen from "../screens/shows/EpisodeInfoScreen";

const Stack = createStackNavigator();
const ShowsStackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ShowsScreen" component={ShowsScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="ShowInfoScreen" component={ShowInfoScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="EpisodeInfoScreen" component={EpisodeInfoScreen} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
  );
};

export default ShowsStackNavigator;