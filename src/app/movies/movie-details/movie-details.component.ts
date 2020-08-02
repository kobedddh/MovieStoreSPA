import { MovieService } from './../../core/services/movie.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie;
  movieId:number;
  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.movieId= +params.get('id');
      this.movieService.getMovieDetails(this.movieId).subscribe((m)=>{
        this.movie=m;
        console.log(this.movieId);
        console.table(this.movie);
      });
    });
  }
}
