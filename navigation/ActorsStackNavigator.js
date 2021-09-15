import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActorsScreen from "../screens/actors/ActorsScreen";
import ActorInfoScreen from "../screens/actors/ActorInfoScreen";
import ShowInfoScreen from "../screens/shows/ShowInfoScreen";
import EpisodeInfoScreen from "../screens/shows/EpisodeInfoScreen";

const Stack = createStackNavigator();
const ActorsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActorsScreen"
        component={ActorsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ActorInfoScreen"
        component={ActorInfoScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ShowInfoScreen2"
        component={ShowInfoScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="EpisodeInfoScreen2"
        component={EpisodeInfoScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ActorsStackNavigator;
