import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//07/30
import {HttpClientModule} from '@angular/common/http';

//import 3rd party libraries
//07/31
import {
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTabsetModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";



//those components are automatically imported when using CLI create them
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { ProfileComponent } from './account/profile/profile.component';
// import { MoviesComponent } from './movies/movies.component';

//@ is used for the decorator
//Decorators are like Attributes in C#
//@NgModule is the decorator to mark this file as a module
@NgModule({
  //Components (like controller in MVC); If we want to use one component in Angular, they should be
  //declared inside at least one module
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    MovieListComponent,
    FavoritesComponent,
    PurchasesComponent,
    ProfileComponent
    // MoviesComponent
  ],
  //place to put third party libraries
  imports: [
    BrowserModule,
    AppRoutingModule,
    //07/30
    HttpClientModule,
    NgbModule,
    //07/31
    //add NgBootstrapModule
    NgbModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbAlertModule
  ],
  //Dependency Injection
  providers: [],
  //we can select which component needs to be started when application starts
  //main -->AppModule-->bootstrap AppComponent
  bootstrap: [AppComponent]
})

//its an Typescript class 
export class AppModule { }

