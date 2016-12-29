import { Routes } from '@angular/router';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieStartComponent } from './movie-start.component';

export const MOVIES_ROUTES: Routes=[
  { path:'', component: MovieStartComponent },
  { path:':id', component: MovieDetailComponent}
];
