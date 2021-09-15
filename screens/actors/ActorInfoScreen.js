import React, { useEffect, useState } from "react";
import { getActorById, getShowsByActor } from "../../services/moviesApi";
import { Text, Image } from "react-native-elements";
import { Dimensions, FlatList, View } from "react-native";
import Show from "../../components/Show";
import Styles from "./ActorInfo.android";

const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  columns: Dimensions.get("window").width < 500 ? 3 : 5,
};
const ActorInfoScreen = ({ route }) => {
  const { actorId } = route?.params;
  const [actor, setActor] = useState();
  const [shows, setShows] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getActorById(actorId, signal).then((data) => {
      if (data && data.error) {
      } else {
        setActor(data);
      }
    });

    getShowsByActor(actorId, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setShows(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const renderShows = ({ item }) => (
    <Show
      id={item._embedded.show.id}
      title={item._embedded.show.name}
      poster={item._embedded.show.image}
      width={100}
      height={150}
    />
  );
  return (
    <View style={Styles.container}>
      {actor?.image?.original ? (
        <Image
          source={{ uri: actor?.image?.original }}
          resizeMode="cover"
          style={{
            width: dimensions.fullWidth,
            height: dimensions.fullHeight * 0.45,
          }}
        ></Image>
      ) : (
        <Image source={require('../../assets/noPicture.png')}  style={{
          width: dimensions.fullWidth,
          height: dimensions.fullHeight *0.45,
        }}></Image>
      )}
      <Text style={Styles.title}>{actor?.name}</Text>
      <View style={Styles.showContainer}>
      <Text style={Styles.known}>Known for</Text>
      <FlatList
        data={shows}
        keyExtractor={(item) => item._embedded.show.id.toString()}
        renderItem={renderShows}
        horizontal
        />
        </View>
    </View>
  );
};

export default ActorInfoScreen;
