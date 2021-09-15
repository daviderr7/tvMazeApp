import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from './Actor.android.style';

const Actor = ({ id, name, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  style={Styles.container}
      onPress={() => {
        navigation.navigate("ActorInfoScreen", { actorId: id });
      }}
    >
      {image?.medium ? (
        <Image
          source={{ uri: image?.medium }}
          style={Styles.image}
        ></Image>
      ) : (
        null
      )}

      <Text  style={Styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Actor;
