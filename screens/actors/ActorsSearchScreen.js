import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import Actor from "../../components/Actor";
import { getActorsByName } from "../../services/moviesApi";

const ActorsSearchScreen = () => {
  const [actors, setActors] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {}, []);
  const searchActors = (value) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getActorsByName(search, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        //console.log(data);
        setActors(data);
      }
    });
    setSearch(value);

    return function cleanup() {
      abortController.abort();
    };
  };

  const renderActors = ({ item }) => (
    <Actor name={item.person.name} image={item.person.image} />
  );
  return (
    <>
      <SearchBar
        placeholder="Shearch actors..."
        onChangeText={(value) => searchActors(value)}
        value={search}
        inputContainerStyle={{borderRadius:25}}
      />
      <FlatList
        data={actors}
        keyExtractor={(item) => item.person.id.toString()}
        renderItem={renderActors}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </>
  );
};
export default ActorsSearchScreen;
