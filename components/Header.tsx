// Header.tsx
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../styles/colores";

interface HeaderProps {
    resetGame: () => void;
    pauseGame: () => void;
    children: JSX.Element | JSX.Element[]; // Cambiado a "children"
    isPaused: boolean;
}

export default function Header({ children, resetGame, pauseGame, isPaused }: HeaderProps): JSX.Element {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={resetGame}>
                <Ionicons name="reload-circle" size={35} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={pauseGame}>
                <FontAwesome
                    name={isPaused ? "play-circle" : "pause-circle"}
                    size={35}
                    color={Colors.primary}
                />
            </TouchableOpacity>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: Colors.primary,
        borderWidth: 12,
        borderTopWidth:50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomWidth: 0,
        padding: 15,
        backgroundColor: Colors.background,
    },
});
