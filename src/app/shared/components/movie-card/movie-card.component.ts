import { Component, OnInit, Input } from '@angular/core';
import {Movie} from './../../models/movie';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  //we don't call API from this movie-card, instead we receive data from other components, like movieComponent, GenreComponent,..
  @Input() movie:Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
