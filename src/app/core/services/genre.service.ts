import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {Genre} from 'src/app/shared/models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiService:ApiService) { }
  getAllGenres():Observable<Genre[]>{
    // http://localhost:58601/api/genres
    // http://localhost:58601/api/account/login
    return this.apiService.getAll('genres/getall');
    // this points to the object that is calling this getAllGenres() method
  }
}
