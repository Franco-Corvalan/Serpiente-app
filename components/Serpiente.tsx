import { Fragment } from "react";
import { SerpienteCoordenada } from "../types/types";
import { View ,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Serpiente({snake}:SerpienteCoordenada):JSX.Element {
    return(
        <Fragment>
          {snake.map((segment:any,index:number)=>{
            const segmentStyle = {
                left: segment.x * 10,
                top: segment.y * 10,
            }
            return(
                <View key={index} style={[styles.snake,segmentStyle]}></View>
            )
          })}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake:{
        width:15,
        height:15,
        borderRadius:7,
        backgroundColor:'red',
        position: 'absolute',
    }
})