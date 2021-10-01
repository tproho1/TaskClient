import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IShow } from "../_interfaces/shows";



@Injectable({
    providedIn: 'root'
})

export class ShowsService{
     

    constructor(private http: HttpClient){}


    getShows(){
        return this.http.get<IShow[]>('http://localhost:5000/api/shows');
    }
}