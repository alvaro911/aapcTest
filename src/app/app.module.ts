import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesService } from './movies/movies.service';
import { MovieItemComponent } from './movies/movies-list/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieStartComponent } from './movies/movie-start.component';

import { PuppiesComponent } from './puppies/puppies.component';
import { PuppiesService } from './puppies/puppies.service';
import { PuppiesListComponent } from './puppies/puppies-list/puppies-list.component';
import { PuppyComponent } from './puppies/puppies-list/puppy.component';
import { PuppySearchComponent } from './puppies/puppy-search/puppy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieStartComponent,
    PuppiesComponent,
    PuppiesListComponent,
    PuppyComponent,
    PuppySearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    ReactiveFormsModule,
    JsonpModule
  ],
  providers: [MoviesService, PuppiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
