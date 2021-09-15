import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { Text } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OverlayComponent from "../../components/OverlayComponent";
import Show from "../../components/Show";
import { getAllShows, getShowByName } from "../../services/moviesApi";
import { Colors } from "../../styles";
import Styles from "./Shows.android.style";

const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  columns: Dimensions.get("window").width < 500 ? 3 : 5,
};

const ShowsScreen = ({ navigation }) => {
  const [shows, setShows] = useState([]);
  const [toggleOverlay, setToggleOverlay] = useState(true);
  const [page, setPage] = useState(0);

  const getShows = async () => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    let data = await getAllShows(page, signal);
    if (data && data.error) {
      console.log(data.error);
    } else {
      //console.log(data);
      setShows([...shows, ...data]);
      setToggleOverlay(false);
    }
    return function cleanup() {
      abortController.abort();
    };
  };

  const loadMoreShows = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getShows();
  }, [page]);

  const renderShows = ({ item }) => (
    <Show
      id={item.id}
      title={item.name}
      poster={item.image}
      year={item.premiered}
      rating={item.rating}
      width={100}
      height={200}
    />
  );
  return (
    <>
      <OverlayComponent isVisible={toggleOverlay} />
      <View style={Styles.searchContainer}>
        <Text h1 style={Styles.headerText}>
          Series
        </Text>
        <MaterialCommunityIcons
          name="magnify"
          onPress={() => navigation.navigate("ShowsSearchScreen")}
          size={30}
          color={Colors.WHITE}
        ></MaterialCommunityIcons>
      </View>
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderShows}
        numColumns={dimensions.columns}
        columnWrapperStyle={Styles.container}
        contentContainerStyle={{
          backgroundColor: Styles.container.backgroundColor,
        }}
        onEndReachedThreshold={0.3}
        onEndReached={loadMoreShows}
      />
    </>
  );
};
export default ShowsScreen;
