import { Component, Input } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'hz-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie:Movies;
  @Input() movieId: number;
}
