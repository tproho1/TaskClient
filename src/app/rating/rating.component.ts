import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../_Interfaces/movies';
import { IShow } from '../_Interfaces/shows';
import { IRating } from '../_Interfaces/ratings';
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
  
  constructor(private moviesService : MoviesService, private showsService : ShowsService, private ratingsService : RatingsService) { }

  ngOnInit(): void {
    this.loadMovies();
    this.loadShows();
  }

  loadMovies(){
    this.moviesService.getMovies().subscribe(movies =>{ this.movies = movies; })
  }

  loadShows(){
    this.showsService.getShows().subscribe(shows =>{ this.shows = shows; })
  }
  sendRating(movieId : string, grade : number){
      this.ratingsService.postRating(movieId,grade).subscribe();
  }

}
