import React from "react";
import { Overlay } from "react-native-elements";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "../styles";

const OverlayComponent = ({ isVisible }) => {
  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
      ></ActivityIndicator>
    </Overlay>
  );
};
export default OverlayComponent;
