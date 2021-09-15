import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill("star-outline");
  const r = [...Array(filledStars).fill("star"), ...maxStars];

  return (
    <View style={styles.rating}>
      {r.map((type, index) => {
        return (
          <MaterialCommunityIcons
            key={index}
            name={type}
            size={12}
            color={"yellow"}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingNumber: { marginRight: 4, fontSize: 14 },
  rating: {
    flexDirection: "row",
    marginVertical: 4,
  },
});
export default Rating;
