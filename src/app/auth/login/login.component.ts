import { AuthenticationService } from './../../core/services/authentication.service';
import { Login } from './../../shared/models/login';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//use this property to display message in the UI
  invalidLogin:boolean;

  //user went to user/purchases page=>it redirect to Login page
  //after successful login, go back to original page that it came from (user/purchases page)
  returnUrl:string;
  //used to store jwt token after logged in
  user:User;
  userLogin: Login={
    email:'',
    password:''
  }
  constructor(
    private authService: AuthenticationService,
    //used for routing
    private router: Router,
    //used to get the data from URL
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.authService.login(this.userLogin).subscribe((response) => {
      //AuthenticationService Login() returns bool, so if that return true, meaning successfully loged in
      if (response) {
        // navigate to page retutn URL or Home page
        this.router.navigate(['/']);
      } else {
        //if fail to log in,
        this.invalidLogin = true;
      }
    });
  }

  login(){
    console.log('submit button clicked');
  }

}
