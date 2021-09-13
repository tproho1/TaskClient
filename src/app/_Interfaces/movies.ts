import { IActor } from "./actors";
import { IRating } from "./ratings";

export interface IMovie{
    id: string;
    title: string;
    description: string;
    releaseDate: Date;
    actors: IActor[];
    ratings: number;
    coverImage: Blob;
}
