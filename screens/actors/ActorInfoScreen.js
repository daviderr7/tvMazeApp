import React, { useEffect, useState } from "react";
import { getActorById, getShowsByActor } from "../../services/moviesApi";
import { Text,Image } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native";
import Show from "../../components/Show";

const ActorInfoScreen = ({route})=>{
  const {actorId}=route?.params;
    const [actor,setActor]=useState();
    const [shows,setShows]=useState();

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;
    
        getActorById(actorId, signal).then((data) => {
          if (data && data.error) {
           // console.log(data.error);
          } else {
           // console.log(data);
            setActor(data);
          }
        });

        getShowsByActor(actorId, signal).then((data) => {
            if (data && data.error) {
              console.log(data.error);
            } else {
             // console.log(data[0]._embedded.show.name);
              setShows(data);
            }
          });
    
        return function cleanup() {
          abortController.abort();
        };
    },[]);

    const renderShows = ({item}) => <Show id={item._embedded.show.id} title={item._embedded.show.name} poster={item._embedded.show.image} genre={item._embedded.show.genre} reting={item._embedded.show.rating}  />;
    return(
        <>
      {actor?.image?.medium?<Image source={{uri:actor?.image?.medium}}  style={{ width: 500, height: 300 }}></Image>:
        <MaterialCommunityIcons
        name="account"
        size={26}
      ></MaterialCommunityIcons>}
      <Text style={{width:100,height:50}}>{actor?.name}</Text>
      <FlatList 
        data={shows}
        keyExtractor={(item)=>item._embedded.show.id}
        renderItem={renderShows}
        horizontal
      
      />
     
  
        </>
    );
}

export default ActorInfoScreen;