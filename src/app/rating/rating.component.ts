import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../_interfaces/movies';
import { IShow } from '../_interfaces/shows';
import { IRating } from '../_interfaces/ratings';
import { MoviesService } from '../_services/movies.service';
import { RatingsService } from '../_services/ratings.service';
import { ShowsService } from '../_services/show.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  errorMessage: string = '';
  sub!: Subscription ;

  

  movies: IMovie[] = [];
  shows: IShow[] = [];
  
  x = 5;
  y = 1;
  
  constructor(private moviesService : MoviesService, private ratingsService : RatingsService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this.moviesService.getMovies().subscribe(movies =>{ this.movies = movies; })
  }

  sendRating(movieId : string, grade : number){
      this.ratingsService.postRating(movieId,grade).subscribe();
  }
  

}
