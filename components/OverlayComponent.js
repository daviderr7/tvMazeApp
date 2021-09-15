import React from 'react';
import { Overlay } from 'react-native-elements';
import { ActivityIndicator } from "react-native-paper";



const OverlayComponent=({isVisible})=>{
    return(
        <Overlay isVisible={isVisible} overlayStyle={{backgroundColor:'transparent',width:"100%",height:"100%",justifyContent:'center'}}>
        <ActivityIndicator size="large" color={'black'}></ActivityIndicator>
      </Overlay>
    );
}
export default OverlayComponent;
