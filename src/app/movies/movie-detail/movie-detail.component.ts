import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { MoviesService } from '../movies.service'
import { Movies } from '../movies'

@Component({
  selector: 'hz-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  selectedMovie: Movies;
  private movieIndex: number;
  private subscription: Subscription
  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private reouter: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.movieIndex = params['id'];
        this.selectedMovie = this.movieService.getMovie(this.movieIndex);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
