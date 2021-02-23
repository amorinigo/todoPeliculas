import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Movie }             from 'app/movies/interfaces/movies-response.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styles: [ 'h2 { text-transform: capitalize }' ]
})
export class GenresComponent implements OnInit {
  public movies  : Movie[];
  public title   : string;
  public genreId : number;


  constructor( public  moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.genreId  = Number( params.genreId );
      this.title    = params.genreType;
      this.moviesService.loadGenres( this.movies = [], this.genreId );
    });
  }

  public loadMovies(): void {
    this.moviesService.loadMoreMovies(this.movies, undefined, this.genreId);
  }
}
