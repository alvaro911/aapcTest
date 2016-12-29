import { Component, OnInit } from '@angular/core';

import { Movies } from '../movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'hz-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movies[] = []
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

}
