import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from '@shared/services/movies.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { ButtonService } from '@shared/services/button.service';

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
               private activatedRoute : ActivatedRoute, 
               private buttonService  : ButtonService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.genreId  = Number( params.genreId );
      this.title    = params.genreType;
      this.moviesService.loadGenres( this.movies = [], this.genreId );
      this.buttonService.seeMoviesPages();
    });
  }

  public loadMovies() {
    this.moviesService.loadMoreMovies(this.movies, '',this.genreId);
    this.buttonService.seeMoviesPages();
  }
}
