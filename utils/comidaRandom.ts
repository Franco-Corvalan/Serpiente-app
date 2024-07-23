import { Coordenada } from "../types/types";

export const randomFood = (maxX: number, maxY: number): Coordenada => {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
};