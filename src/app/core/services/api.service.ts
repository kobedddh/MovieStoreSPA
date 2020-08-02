import { Injectable } from '@angular/core';
//07/30
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //inject HttpClient
  //in C# we do private readonly..
  //in Angular we just do like this
  constructor(protected http: HttpClient) { }


  // publish and subscribe (a design pattern)
  //   news letters...we subscribe to those news letter, whenevr there is a brreaing news we get notofication
  // when we make an HTTP call, once the call finished, but that call will only be made and will only receive data
  // when you subscribe. 
  // Observable can be finite or infinite.
  //Http call is a finite observable



  //    parameterName:Datatype; return type
  // http://localhost:58601/api/genres
  // Observable<> comes from rxjs library 
  getAll(path: string): Observable<any[]> {
    // we need to append the common url with path that is being passed
    //map is like Select() in LINQ
    // 1,2,3 select map (n => n*n) = 1, 4 9
    // 1,2,3 where , filter ( n => n> 2) = 3
    return this.http
      .get(`${environment.apiUrl}${path}`)
      .pipe(
        // put the receiving JSON array into any[] array 
        map((resp) => resp as any[])
      );
  }

  // get movie by movie id
  // get userinfo by id
  // http://localhost:58601/api/movies/1
  getOne(path: string, id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}` + '/' + id).pipe(
      map(resp => resp as any)
    );
  }

  //post information
  //login,signup,create movie
  create() {

  }

  //update movie/user info
  update() {

  }

  //delete favorite movie
  delete() {

  }
}
