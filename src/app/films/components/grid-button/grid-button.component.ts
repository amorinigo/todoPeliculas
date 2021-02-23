import { Component, Input }  from '@angular/core';
import { MoviesService }     from 'app/movies/services/movies.service';

@Component({
  selector: 'app-grid-btn',
  templateUrl: './grid-button.component.html',
  styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent {
  @Input() type   : string;
  @Input() length : number;

  constructor( public moviesService: MoviesService ) {}
}
