import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Movie }             from 'app/movies/interfaces/movies-response.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies : Movie[];
  public rating : string;

  constructor( public  moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.rating = this.moviesService.convertParam( params.rating );
      this.moviesService.loadManyMovies( this.movies = [], this.rating );
    });
  }

  public loadMovies(): void {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
  }
}
