import { Component, OnInit, Input } from '@angular/core';
import { Movie }                    from '@shared/interfaces/movies-response.interface';
import { MoviesService }            from '@shared/services/movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies:        Movie[];
  @Input() filter:        number;
  public thereAreMovies:  boolean;
  public lastLength:      number;

  constructor( private moviesService: MoviesService ) {
    this.thereAreMovies = true;
  }

  ngOnInit(): void {}

  public showDetails( id: number ): Promise<boolean> {
    return this.moviesService.showMovieDetails( id );
  }

  public loadMoreMovies(): void {
    if( this.filter ) {
      this.moviesService.loadMoreMoviesWithFilter( this.movies, Number( this.filter ) );
    } else {
      this.moviesService.loadMoreMovies( this.movies );
    }

    this.disableButton();
  }

  private disableButton(): void {
    ( this.lastLength == this.movies.length ) ?
      this.thereAreMovies = false :
      this.lastLength = this.movies.length;
  }
}
