import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  constructor() { }
  //Localstorage and sessionstorage were introduced in HTML5
  //cookies were there since the beginning of HTML
  getToken():string{
                                //'token' is the key,we are getting the value using this method
    return localStorage.getItem('token');
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }
 //when we log out
  destroyToken(){
    localStorage.removeItem('token');
  }
}
