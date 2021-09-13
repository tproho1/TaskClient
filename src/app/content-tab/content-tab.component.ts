import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.css'],
})

export class ContentTabComponent implements OnInit {

  value?:string;
  selected?: string = '';
  states: string[] = [];

  _filterString: string = '';
  
  get filterString(): string {
    return this._filterString;
  }

  set filterString(value:string)  {
     this._filterString = value;
     console.log(value);
     
  }

onSelect(data: TabDirective): void {
  this.value = data.heading;
}

  constructor() { }

  ngOnInit(): void {
    this._filterString = '';
  }

}
