import { IActor } from "./actors";
import { IRating } from "./ratings";

export interface IShow{
    showId: string;
    title: string;
    description: string;
    releaseDate: Date;
    actors: IActor[];
    ratings: number;
    coverImageUrl: 'blob';
    seasons: number;
}