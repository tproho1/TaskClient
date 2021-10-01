import { IActor } from "./actors";


export interface IShow{
    id: string;
    title: string;
    description: string;
    releaseDate: Date;
    actors: IActor[];
    ratings: number;
    seasons: number;
}