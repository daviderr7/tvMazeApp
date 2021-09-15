import React, { useState,useEffect } from "react";
import { Text, Image } from "react-native-elements";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { getEpisoById } from "../../services/moviesApi";
import Styles from './Episode.android.style';
import OverlayComponent from "../../components/OverlayComponent";
import { ActivityIndicator } from "react-native-paper";


const dimensions = {
    fullHeight: Dimensions.get("window").height,
    fullWidth: Dimensions.get("window").width,
    columns: Dimensions.get("window").width < 500 ? 3 : 5,
  };

const EpisodeInfoScreen=({route})=>{
    const { episodeId } = route?.params;
    const [episode,setEpisode]=useState();
     const [toggleOverlay, setToggleOverlay] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
    
        getEpisoById(episodeId, signal).then((data) => {
            if (data && data.error) {
              console.log(data.error);
            } else {
                setEpisode(data);
                setToggleOverlay(false);
            }
          });
    
        return function cleanup() {
          abortController.abort();
        };
      }, []);
    return(
        <View style={Styles.container}>
        <View style={Styles.imageContainer}>
         {episode?.image?.medium ? (
           <Image
             PlaceholderContent={<ActivityIndicator />}
             source={{ uri: episode?.image?.original }}
             resizeMode="cover"
             style={{
               width: dimensions.fullWidth,
               height: dimensions.fullHeight * 0.65,
             }}
           ></Image>
         ) : (
           null
         )}
       </View>     
       <ScrollView style={Styles.detailsContainer}>
         <View style={Styles.detailsBody}>
           <Text style={Styles.title}>{episode?.name}</Text>
           <Text style={Styles.title}>
             {episode?.name.toString()}
           </Text>
           <Text style={Styles.season}>
             {episode?.season.toString()}
           </Text>
           <Text style={Styles.number}>
             {episode?.number.toString()}
           </Text>
           <Text style={Styles.summary}>
             {episode?.summary.replace(/<[^>]*>?/gm, "")}
           </Text>
         </View>
        
       </ScrollView>
       <OverlayComponent isVisible={toggleOverlay} />
     </View>
    );
}

export default EpisodeInfoScreen;