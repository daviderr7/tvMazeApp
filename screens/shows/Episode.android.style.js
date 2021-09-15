import { StyleSheet } from "react-native";
import * as Styles from "../../styles/index";
import { FONT_WEIGHT_BOLD } from "../../styles/typography";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.Colors.BLACK,
  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Styles.Colors.BLACK,
  },
  detailsBody: {
    marginTop: 10,
    marginHorizontal: 20,
    flex: 1,
    backgroundColor: Styles.Colors.BLACK,
  },
  title: {
    color: Styles.Colors.WHITE,
    fontSize: Styles.Typography.FONT_SIZE_40,
  },
  number: {
    color: Styles.Colors.GRAY_DARK,
    fontSize: Styles.Typography.FONT_SIZE_16,
  },
  summary: {
    paddingTop: 15,
    color: Styles.Colors.GRAY_LIGHT,
    fontSize: Styles.Typography.FONT_SIZE_12,
    textAlign: "justify",
  },
  season: {
    paddingTop: 5,
    color: Styles.Colors.SECONDARY,
    fontSize: 12,
  },
  seasonContainer: {},
  seasonText: {
    color: Styles.Colors.WHITE,
    fontSize: 20,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  episodeContainer: {
    backgroundColor: Styles.Colors.PRIMARY,
  },
  episodeText: {
    fontSize: 15,
    color: Styles.Colors.WHITE,
  },
});
