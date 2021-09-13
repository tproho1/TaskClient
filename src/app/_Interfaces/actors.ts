import { IMovie } from "./movies";
import { IShow } from "./shows";

export interface IActor{
    ActorId: string,
    firstName: string;
    lastName: string;
    movies: IMovie[];
    shows: IShow[];

}
