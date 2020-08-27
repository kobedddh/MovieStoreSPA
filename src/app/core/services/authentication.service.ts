import { JwtStorageService } from './jwt-storage.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from './../../shared/models/login';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService:ApiService, private jwtStorage:JwtStorageService) { }
  login(userLogin:Login):Observable<boolean>{
    //call our API http://localhost:55249/api/account/login
    return this.apiService.create('account/login',userLogin)
    .pipe(
      map(response=>{
        if(response){
          //need to store the token in Local storage
                                    //can be seen in postman,token is in the response
          this.jwtStorage.saveToken(response.token);
          //decode the token and populate User info
          return true;
        }
        return false;
      })
    );
  }
  logout(){

  }
}
