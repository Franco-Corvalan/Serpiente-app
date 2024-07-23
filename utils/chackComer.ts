import { Coordenada } from "../types/types";

export const checkComer = (head: Coordenada, food: Coordenada, area: number): boolean => {
    const distanceBetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
    const distanceBetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);
    return (
        distanceBetweenFoodAndSnakeX < area && distanceBetweenFoodAndSnakeY < area
    );
};