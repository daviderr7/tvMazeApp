import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { SearchBar } from "react-native-elements";
import Show from "../../components/Show";
import { getShowByName } from "../../services/moviesApi";
import Styles from "./ShowsSearch.android";

const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  columns: Dimensions.get("window").width < 500 ? 3 : 5,
};
const ShowsSearchScreen = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {}, []);
  const searchShows = (value) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getShowByName(search, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        //console.log(data);
        setShows(data);
      }
    });
    setSearch(value);

    return function cleanup() {
      abortController.abort();
    };
  };

  const renderShows = ({ item }) => (
    <Show
      id={item.show.id}
      title={item.show.name}
      poster={item.show.image}
      year={item.show.premiered}
      rating={item.show.rating}
      width={100}
      height={200}
    />
  );
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SearchBar
        placeholder="Search series..."
        onChangeText={(value) => searchShows(value)}
        value={search}
        inputContainerStyle={{ borderRadius: 25 }}
      />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderShows}
        numColumns={dimensions.columns}
        columnWrapperStyle={Styles.container}
        contentContainerStyle={{
          backgroundColor: Styles.container.backgroundColor,
        }}
      />
    </View>
  );
};
export default ShowsSearchScreen;
