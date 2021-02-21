import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from '@shared/services/movies.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { ButtonService } from '@shared/services/button.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public movies : Movie[];
  public rating : string;

  constructor( public  moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute,
               private buttonService  : ButtonService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.rating = this.convertParam( params.rating );
      this.moviesService.loadManyMovies( this.movies = [], this.rating );
      this.buttonService.seeMoviesPages( this.rating );
    });
  }

  private convertParam( param: string ): string {
    switch( param ) {
      case 'últimas' : return 'nowPlaying';
      case 'estrenos' : return 'upcoming';
      case 'ranking' : return 'topRated';
      case 'más vistas' : return 'popular';
    }
  }

  loadMovies() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
    this.buttonService.seeMoviesPages( this.rating );
  }
}
