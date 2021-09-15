import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import Show from "../../components/Show";
import { getShowByName } from "../../services/moviesApi";

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
      title={item.show.name}
      poster={item.show.image}
      genre={item.show.genre}
      reting={item.show.rating}
    />
  );
  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => searchShows(value)}
        value={search}
        inputContainerStyle={{ borderRadius: 25 }}
      />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderShows}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </>
  );
};
export default ShowsSearchScreen;
