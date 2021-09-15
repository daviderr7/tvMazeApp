import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-elements";
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
        <Image source={require('../assets/noPicture.png')} style={Styles.image}></Image>
      )}

      <Text  style={Styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Actor;
