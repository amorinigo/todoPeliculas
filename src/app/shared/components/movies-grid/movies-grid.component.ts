import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor( private moviesService: MoviesService,
               private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  showDetails( id: number ) {
    this.router.navigate(['película-detalles', id]);
    window.scrollTo(0,0);
  }
}
