import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Styles from "./Show.android.style";

const Show = ({ id, title, poster, year, rating, width, height }) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <TouchableOpacity
      style={[Styles.container, { width, height }]}
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
        <Image source={{ uri: poster?.medium }} style={Styles.image}></Image>
      ) : (
        <Image
          source={require("../assets/noPicture.png")}
          style={Styles.image}
        ></Image>
      )}
      <Text numberOfLines={1} style={Styles.title}>
        {title}
      </Text>
      {year && (
        <View style={Styles.yearRatingContainer}>
          <Text style={Styles.year}>{year.slice(0, 4)} </Text>

          <Text style={Styles.year}>
            {rating.average}{" "}
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={"yellow"}
            ></MaterialCommunityIcons>{" "}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default Show;
