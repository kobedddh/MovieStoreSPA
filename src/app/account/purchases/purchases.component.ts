import { UserService } from './../../core/services/user.service';
import { MovieService } from './../../core/services/movie.service';
import { Purchases } from './../../shared/models/purchases';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  movies:Movie[];
  purchasedMovies:Purchases;
  userId:number;
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.userId= +params.get('id');
      this.userService.getUserPurchasedMovies(this.userId).subscribe(
        (m)=>{
          if(m){
            this.movies=m.purchasedMovies.map(pm=>{
              return {
                id:pm.id,posterUrl:pm.posterUrl,title:pm.title
              } as Movie;
            });
          }
      });
    });
  }

}
