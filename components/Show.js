import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Styles from "./Show.android.style";

import Rating from "./Rating";

const Show = ({ id, title, poster, year, rating }) => {
  let stars = Math.floor(rating);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() =>
        navigation.navigate(
          route.name === "ActorInfoScreen"
            ? "ShowInfoScreen2"
            : "ShowInfoScreen",
          { showId: id }
        )
      }
    >
      {poster?.medium ? (
        <Image
          source={{ uri: poster?.medium }}
          style={Styles.image}
        ></Image>
      ) : (
        <MaterialCommunityIcons
          name="account"
          size={26}
        ></MaterialCommunityIcons>
      )}
      <Text numberOfLines={1} style={Styles.title}>
        {title}
      </Text>
      <View style={Styles.yearRatingContainer}>
        <Text style={Styles.year}>{year.slice(0, 4)} </Text>
        <Text style={Styles.year}>{rating.average} <MaterialCommunityIcons
          name="star"
          size={12}
          color={"yellow"}
        ></MaterialCommunityIcons> </Text>
       
      </View>
    </TouchableOpacity>
  );
};
export default Show;
