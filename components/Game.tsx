import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Colors } from '../styles/colores';
import { Coordenada, Direction, GestureEventType } from '../types/types';
import Header from './Header';
import Serpiente from './Serpiente';
import { check } from '../utils/checkLimits';
import Comida from './Comidas';
import { checkComer } from '../utils/chackComer';
import { randomFood } from '../utils/comidaRandom';

const SnakeInicio = [{ x: 5, y: 5 }];
const FoodInicio = { x: 5, y: 20 };
const Gamelimites = { xMin: 0, xMax: 38, yMin: 0, yMax: 67 };
const MoveIntervaloTiempo = 40;
const ScoreContador = 10;

export default function Game(): JSX.Element {
    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<Coordenada[]>(SnakeInicio);
    const [food, setFood] = React.useState<Coordenada>(FoodInicio);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    const [isPause, setIsPause] = React.useState<boolean>(false);
    const [score, setScore] = React.useState<number>(0);

    React.useEffect(() => {
        if (!isGameOver) {
            const intervaloID = setInterval(() => {
                !isPause && moveSnake();
            }, MoveIntervaloTiempo)
            return () => clearInterval(intervaloID);
        }
    }, [isGameOver, snake, isPause]);

    const moveSnake = () => {
        const snakeCabeza = snake[0];
        const newCabeza = { ...snakeCabeza }; // crea una copia para modificar

        //limites del juego (game over)
        if (check(snakeCabeza, Gamelimites)) {
            setIsGameOver((prev) => !prev);
            return;
        }

        switch (direction) {

            case Direction.Up:
                newCabeza.y -= 1;
                break;

            case Direction.Down:
                newCabeza.y += 1;
                break;

            case Direction.Left:
                newCabeza.x -= 1;
                break;

            case Direction.Right:
                newCabeza.x += 1;
                break;

            default:
                break;
        }

        // check si se comio la comida
        if (checkComer(newCabeza, food, 2)) {
            setFood(randomFood(Gamelimites.xMax, Gamelimites.yMax));
            setSnake([newCabeza, ...snake]);
            setScore(score + ScoreContador);
        } else {
            setSnake([newCabeza, ...snake.slice(0, -1)]); //mover serpiente
        }

    };

    const handlerGesture = (event: GestureEventType) => {
        // console.log(event.nativeEvent);
        const { translationX, translationY } = event.nativeEvent;
        // console.log(translationX,translationY); 
        console.log(direction);

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                setDirection(Direction.Right);
            } else {
                setDirection(Direction.Left);
            }
        } else {
            if (translationY > 0) {
                setDirection(Direction.Down);
            } else {
                setDirection(Direction.Up);
            }
        }
    };

    const reloadGame = () => {
        setSnake(SnakeInicio);
        setFood(FoodInicio);
        setIsGameOver(false);
        setScore(0);
        setDirection(Direction.Right);
        setIsPause(false);
    };

    const pauseGame = () => {
        setIsPause(!isPause);
    }

    return (
        <PanGestureHandler onGestureEvent={handlerGesture}>
            <SafeAreaView style={styles.container}>
                <Header resetGame={reloadGame} pauseGame={pauseGame} isPaused={isPause}>
                    <Text style={{fontSize:22,fontWeight:"bold",color:Colors.primary}}>{score}</Text>
                </Header>
                <View style={styles.boundaries}>
                    {/* <View style={styles.snake} /> */}
                    <Serpiente snake={snake}></Serpiente>
                    <Comida x={food.x} y={food.y}></Comida>
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
        flex: 1,
        borderWidth: 15,
        borderTopWidth: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderColor: Colors.primary,
        backgroundColor: Colors.background,
    },
    // snake: {
    //     width: 20,
    //     height: 20,
    //     backgroundColor: 'red',
    // }
})