import { TouchableOpacity, StyleSheet, View } from "react-native";
import {Ionicons,FontAwesome} from "@expo/vector-icons";
import { Colors } from "../styles/colores";
import { Children } from "react";

interface HeaderProps{
    resetGame: ()=> void;
    pauseGame: ()=> void;
    childre:JSX.Element;
    isPaused:boolean;
}


export default function Header({childre,resetGame,pauseGame,isPaused}:HeaderProps):JSX.Element{
    return (
        <View style={styles.container}>{childre}</View>
    )
} 

const styles = StyleSheet.create({
    container:{
        borderColor:Colors.primary,
        borderWidth:12,
    }
})