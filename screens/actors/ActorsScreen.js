import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { SearchBar } from "react-native-elements";
import Actor from "../../components/Actor";
import { getActorsByName } from "../../services/moviesApi";
import { Colors } from "../../styles";
import Styles from "./Actors.android.style";

const ActorsScreen = () => {
  const [actors, setActors] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {}, []);
  const searchActors = (value) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getActorsByName(search, signal).then((data) => {
      if (data && data.error) {
      } else {
        setActors(data);
      }
    });
    setSearch(value);

    return function cleanup() {
      abortController.abort();
    };
  };

  const renderActors = ({ item }) => (
    <Actor
      id={item.person.id}
      name={item.person.name}
      image={item.person.image}
    />
  );
  return (
    <View style={Styles.container}>
      <SearchBar
        placeholder="Search actors..."
        onChangeText={(value) => searchActors(value)}
        value={search}
        containerStyle={{ backgroundColor: Colors.BLACK }}
        inputContainerStyle={{
          borderRadius: 25,
          backgroundColor: Colors.GRAY_DARK,
        }}
      />
      <FlatList
        data={actors}
        keyExtractor={(item) => item.person.id.toString()}
        renderItem={renderActors}
      />
    </View>
  );
};
export default ActorsScreen;
