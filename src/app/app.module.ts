import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {JwtModule} from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { RatingComponent } from './rating/rating.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthGuard } from './_guards/auth-guard.service';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}
export function tokenGuestGetter(){
  return localStorage.getItem("guestjwt");
}


@NgModule({
  declarations: [
    AppComponent,
    ContentTabComponent,
    MoviesComponent,
    ShowsComponent,
    RatingComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ContentTabComponent, pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      {path: 'login', component: LoginComponent},
      { path: 'rating-page', component: RatingComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    })  
  ],
  providers: [
              AuthGuard, 
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
