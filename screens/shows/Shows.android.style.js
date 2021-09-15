import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.Colors.BLACK,
    justifyContent: "space-around",
  },
  searchContainer: {
    height: 60,
    backgroundColor: Styles.Colors.BLACK,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  headerText: {
    color: Styles.Colors.PRIMARY,
    alignSelf: "flex-start",
  },
});
