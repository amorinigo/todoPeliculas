import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
