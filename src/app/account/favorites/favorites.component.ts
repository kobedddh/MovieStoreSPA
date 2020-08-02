import { UserService } from './../../core/services/user.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  movies:Movie[];
  userId:number;
  constructor(
    private userService:UserService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.userId= +params.get('id');
      this.userService.getUserFavoriteMovies(this.userId).subscribe(
        (m)=>{
          if(m){
            this.movies=m.favoriteMovies.map(fm=>{
              return {
                id:fm.id,posterUrl:fm.posterUrl,title:fm.title
              } as Movie;
            });
          }
      });
    });
  }

}
