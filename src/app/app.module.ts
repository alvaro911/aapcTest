import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MoviesComponent } from './movies/movies.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

import { MoviesService } from './movies/movies.service';
import { MovieItemComponent } from './movies/movies-list/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieStartComponent } from './movies/movie-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    PuppiesComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
