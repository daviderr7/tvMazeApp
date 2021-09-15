import { StyleSheet } from 'react-native';
import * as Styles from '../../styles/index';
import { FONT_WEIGHT_BOLD } from '../../styles/typography';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Styles.Colors.BLACK
  },
  imageContainer:{
    flex:0.4
  },
  detailsContainer:{
    flex: 1, backgroundColor: "#333333"
  },
  detailsBody:{
    marginTop: 10,
    marginHorizontal:20,
     flex: 1, backgroundColor: "#333333"
  },
  title:{
    color: "white", fontSize: 40 
  },
  number:{
    color: "white", fontSize: 20 
  },
  summary:{
    color: "white", fontSize: 12 
  },
  season:{
    color: "white", fontSize: 12
  },
  seasonContainer:{
    
  },
  seasonText:{
    color:"white",
    fontSize:20,
    fontWeight:FONT_WEIGHT_BOLD
  },
  episodeContainer:{
    backgroundColor:Styles.Colors.PRIMARY,
  },
  episodeText:{
    fontSize:15,
    color:"white",
  }
});