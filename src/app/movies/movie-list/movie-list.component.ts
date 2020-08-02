import { MovieService } from './../../core/services/movie.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  genreId: number;
  constructor(
    private movieService: MovieService,
    //ActivatedRoute is the class that will give us lots of information of current URL
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // call api to get list of movies by genres, we nned to get genre id from the Url
    // get the genreId from URL and pass it to Movie Service
    this.route.paramMap.subscribe((params) => {
      // getting genreid from URL
                              //'id' is same as the :id parameter of URL 【app-routing】
      this.genreId = +params.get('id');
      this.movieService.getMoviesByGenre(this.genreId).subscribe((m) => {
        this.movies = m;
        //test if we can get the genreId from URL
        console.log(this.genreId);
        //we can use table rather thant log here, which display data in a pretty table
        console.table(this.movies);
      });
    });
  }
}