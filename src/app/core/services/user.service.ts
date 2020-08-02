import { UserResponse } from './../../shared/models/userResponse';
import { Favorites } from './../../shared/models/favorites';
import { Purchases } from './../../shared/models/purchases';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService:ApiService) { }
  getUserFavoriteMovies(userId:number):Observable<Favorites>{
    return this.apiService.getOne(`${'user/favorites'}`,userId);
  }

  getUserPurchasedMovies(userId:number):Observable<Purchases>{
    return this.apiService.getOne(`${'user/purchases'}`,userId);
  }

  getUserProfile(userId:number):Observable<UserResponse>{
    return this.apiService.getOne(`${'user/myprofile'}`,userId);
  }
}
