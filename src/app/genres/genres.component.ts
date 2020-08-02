import { Genre } from './../shared/models/genre';
import { GenreService } from './../core/services/genre.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  //craete this proerty to show this to view later
  genres:Genre[];
  constructor(private genreService:GenreService) { }
//Page Life Cycle Hooks

//a method to initialize data,call API etc.
  ngOnInit() {
    this.genreService.getAllGenres().subscribe(g=>{
      this.genres=g;
      console.log('inside Genres Component init method');
      console.log(this.genres);
    })
  }

}
