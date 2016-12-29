import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { MoviesComponent } from './movies/movies.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { MOVIES_ROUTES } from './movies/movies.routing'

const APP_ROUTES: Routes=[
  { path: '', redirectTo: '/movies', pathMatch:'full'},
  { path: 'movies', component: MoviesComponent, children: MOVIES_ROUTES},
  { path: 'puppies', component: PuppiesComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
