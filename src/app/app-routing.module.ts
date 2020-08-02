import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

//we can set up our home page
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  //07/31
  //define the route url (this is not API url, but our component URL: if we go to this URL it will display that component)
  //here has nothing to do with backend;
  //at backend we call our services will the URL
  {path:'movies/genre/:id',component:MovieListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
