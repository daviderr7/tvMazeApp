import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.Colors.BLACK,
  },
  imageContainer: {
    flex: 1,
  },
  title: {
    paddingLeft: 10,
    color: Styles.Colors.WHITE,
    fontSize: 40,
  },
  known: {
    paddingVertical: 10,
    color: Styles.Colors.PRIMARY,
    fontSize: Styles.Typography.FONT_SIZE_16,
  },
  showContainer: {
    paddingLeft: 15,
  },
});
