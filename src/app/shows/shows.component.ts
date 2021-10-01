import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IShow } from '../_interfaces/shows';
import { ShowsService } from '../_services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  errorMessage: string = '';
  sub!: Subscription ;
  shows: IShow[] = [];
  fitleredShows: IShow[] = [];
  showedShows: IShow[] = [];
  counter : number = 1;

   _filterString?: string = '';

  
  @Input() set filterString(value: string){
    this._filterString = value;
    if(value.length< 2)
      this.showedShows = this.shows.slice(0,10);
    else this.showedShows = this.preformFilter(value);
  }

  constructor(private showsService : ShowsService) { }

  ngOnInit(): void {
    this.loadShows();
  }

  toggleShows(){
    this.counter++;
    for(var m of this.shows){
        if(this.shows.indexOf(m) >= this.counter*10)break;
        if(this.shows.indexOf(m) < (this.counter-1)*10)continue;
        else this.showedShows.push(m);
      }
  }

  loadShows(){
    this.showsService.getShows().subscribe(shows =>{ this.shows = shows; this.showedShows = shows.slice(0,10)});
  }

  preformFilter(filterBy: string) : IShow[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.shows.filter((shows : IShow) => shows.title.toLocaleLowerCase().includes(filterBy) || shows.description.toLocaleLowerCase().includes(filterBy))
    .sort((a,b) => a.ratings-b.ratings);
  }
}
