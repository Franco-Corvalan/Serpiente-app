import * as React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Colors } from '../styles/colores';


export default function Game(): JSX.Element {
    return (
        <PanGestureHandler>
            <SafeAreaView style={styles.container}>
                <View style={styles.boundaries}>
                    <View style={styles.snake} />
                </View>
            </SafeAreaView>
        </PanGestureHandler>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    boundaries: {
        flex:1,
        borderWidth:15,
        borderTopWidth:50,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderColor: Colors.primary,
        backgroundColor:Colors.background,
    },
    snake: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
    }
})