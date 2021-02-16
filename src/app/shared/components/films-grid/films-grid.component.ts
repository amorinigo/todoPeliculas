import { Component, Input } from '@angular/core';
import { MoviesService }    from '@shared/services/movies.service';
import { SeriesService }    from '@shared/services/series.service';
import { SearchService }    from '@shared/services/search.service';
import { Film }             from '@shared/interfaces/search-response.interface';
import { Serie }            from '@shared/interfaces/series-response.interface';
import { Movie }            from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent {
  @Input() films      : Film[];
  @Input() movies     : Movie[];
  @Input() series     : Serie[];
  @Input() button     : string;
  @Input() search     : string;
  @Input() genreId    : number;
  @Input() rating     : string;
  public   showButton : boolean;
  public   lastLength : number;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService ) {
    this.showButton = true;
  }

  public showDetails( film: Film ): Promise<boolean> {
    if ( film.title ) {
      return this.moviesService.showDetails( film.id );
    } else {
      return this.seriesService.showDetails( film.id );
    }
  }

  public loadMoreFilms(): void {
    // this.disableButton();

    switch( this.button ) {
      case 'inicio'    : return this.inicio();    // moviesService.
      case 'géneros'   : return this.géneros();   // moviesService.
      case 'películas' : return this.películas(); // moviesService.
      case 'seriesTV'  : return this.seriesTV();  // seriesService.
      case 'búsqueda'  : return this.búsqueda();  // searchService.
    }
  }

  inicio() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
  }

  géneros() {
    this.moviesService.loadMoreGenres(this.movies, this.genreId);
  }

  películas() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
  }

  seriesTV() {
    this.seriesService.loadMoreSeries(this.series, this.rating);
  }

  búsqueda() {
    this.searchService.loadMoreFilms(this.films, this.search);
  }

  // private disableButton(): void {
  //   (this.lastLength == this.films.length) ?
  //     this.showButton = false :
  //     this.lastLength = this.films.length;
  // }
}
