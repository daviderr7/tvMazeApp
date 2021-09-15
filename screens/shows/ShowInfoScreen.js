import React, { useEffect, useState } from "react";
import { getEpisodes, getSeasons, getShowById } from "../../services/moviesApi";
import { Text, Image } from "react-native-elements";
import { Dimensions, ScrollView, View } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";
import OverlayComponent from "../../components/OverlayComponent";
import Styles from "./ShowInfo.android.style";
import Rating from "../../components/Rating";
import { Colors } from "../../styles";

const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  columns: Dimensions.get("window").width < 500 ? 3 : 5,
};

const ShowInfoScreen = ({ navigation, route }) => {
  const { showId } = route?.params;
  console.log(route.name);
  const [show, setShow] = useState();
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [toggleOverlay, setToggleOverlay] = useState(true);

  const getEpisodesBySeason = async (data) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    let newArr = [];
    for (let i = 0; i < data.length; i++) {
      let data2 = await getEpisodes(data[i].id, signal);
      newArr.push({ season: i + 1, episode: data2 });
      if (data && data.error) {
        console.log(data.error);
      }
    }
    setEpisodes(newArr);
    setToggleOverlay(false);
    return function cleanup() {
      abortController.abort();
    };
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getShowById(showId, signal).then((data) => {
      if (data && data.error) {
      } else {
        setShow(data);
      }
    });

    getSeasons(showId, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setSeasons(data);
        getEpisodesBySeason(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        {show?.image?.medium ? (
          <Image
            PlaceholderContent={<ActivityIndicator />}
            source={{ uri: show?.image?.original }}
            resizeMode="contain"
            style={{
              width: dimensions.fullWidth,
              height: dimensions.fullHeight * 0.65,
            }}
          ></Image>
        ) : (
          <Image
            source={require("../../assets/noPicture.png")}
            resizeMode="cover"
            style={{
              width: dimensions.fullWidth,
              height: dimensions.fullHeight * 0.45,
            }}
          ></Image>
        )}
      </View>
      <ScrollView style={Styles.detailsContainer}>
        <View style={Styles.detailsBody}>
          <Text style={Styles.title}>{show?.name}</Text>
          <Text style={Styles.genres}>{show?.genres.toString()}</Text>

          {show?.rating && <Rating rating={show?.rating.average} />}
          <Text style={Styles.summary}>
            {show?.summary.replace(/<[^>]*>?/gm, "")}
          </Text>
          {show?.schedule != null &&
            "days" in show.schedule &&
            show?.schedule.days.length > 0 && (
              <Text style={Styles.airing}>{`Airing ${show?.schedule.days.join(
                ", "
              )} at ${show?.schedule.time}`}</Text>
            )}
        </View>
        <List.Section
          style={Styles.seasonContainer}
          titleStyle={Styles.seasonText}
          title="Seasons"
        >
          {episodes.map((item, index) => {
            return (
              <List.Accordion
                key={index}
                theme={{ colors: { primary: Colors.PRIMARY } }}
                title={`Season: ${item.season}`}
              >
                {item.episode.map((item2) => {
                  return (
                    <List.Item
                      onPress={() =>
                        navigation.navigate(
                          route.name === "ShowInfoScreen2"
                            ? "EpisodeInfoScreen2"
                            : "EpisodeInfoScreen",
                          {
                            episodeId: item2.id,
                          }
                        )
                      }
                      titleStyle={Styles.episodeText}
                      style={Styles.episodeContainer}
                      key={item2.id}
                      title={item2.name}
                    />
                  );
                })}
              </List.Accordion>
            );
          })}
        </List.Section>
      </ScrollView>
      <OverlayComponent isVisible={toggleOverlay} />
    </View>
  );
};

export default ShowInfoScreen;
