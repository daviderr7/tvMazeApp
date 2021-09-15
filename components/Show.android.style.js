import { StyleSheet } from "react-native";
import * as Styles from "../styles/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.Colors.GRAY_DARK,
    margin: 5,
    alignContent: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    color: Styles.Colors.WHITE,
    width: "100%",
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: Styles.Typography.FONT_WEIGHT_BOLD,
  },
  rating: {
    color: Styles.Colors.WHITE,
    width: "100%",
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: Styles.Typography.FONT_WEIGHT_REGULAR,
  },
  year: {
    color: Styles.Colors.SECONDARY,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: Styles.Typography.FONT_WEIGHT_REGULAR,
  },
  yearRatingContainer: {
    flex:1,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom:10
  },
});
