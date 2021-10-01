import { IActor } from "./actors";


export interface IMovie{
    id: string;
    title: string;
    description: string;
    releaseDate: Date;
    actors: IActor[];
    ratings: number;
}
