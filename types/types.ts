export enum Direction {
    Right,
    Up,
    Left,
    Down
}

export interface GestureEventType{
    nativeEvent:{translationX: number; translationY:number};
}

export interface Coordenada{
    x:number;
    y:number;
}

export interface SerpienteCoordenada{
    snake: Coordenada[];
}