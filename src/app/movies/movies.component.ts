import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../_Interfaces/movies';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  errorMessage: string = '';
  sub!: Subscription ;
  movies: IMovie[] = [];
  filteredMovies: IMovie[] = [];
  showedMovies: IMovie[] = [];
  counter : number = 1;

   _filterString?: string = '';

  
  @Input() set filterString(value: string){
    this._filterString = value;
    if(value.length< 2)
      this.showedMovies = this.movies.slice(0,10);
    else this.showedMovies = this.preformFilter(value);
    for(var m of this.showedMovies){
      this.moviesService.download(m.title).subscribe((response:any) =>{ m.coverImage = response.Blob; console.log(m.coverImage)});
    }
  }

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
    
    
  }

  toggleMovies(){
    
    this.counter++;
    for(var m of this.movies){
        if(this.movies.indexOf(m) >= this.counter*10)break;
        if(this.movies.indexOf(m) < (this.counter-1)*10)continue;
        else this.showedMovies.push(m);
      }
  }

  loadMovies(){
    this.moviesService.getMovies().subscribe(movies =>{ this.movies = movies; this.showedMovies = movies.slice(0,10)});
    
  }

  preformFilter(filterBy: string) : IMovie[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie : IMovie) => movie.title.toLocaleLowerCase().includes(filterBy) || movie.description.toLocaleLowerCase().includes(filterBy))
    .sort((a,b) => a.ratings-b.ratings).reverse();
  }


}
