import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

}
