import { Coordenada } from "../types/types";

export const check = (snakeCabeza:Coordenada, limites:any):boolean =>{
    return (
        snakeCabeza.x < limites.xMin ||
        snakeCabeza.x > limites.xMax ||
        snakeCabeza.y < limites.yMin ||
        snakeCabeza.y > limites.yMax 
    )
}