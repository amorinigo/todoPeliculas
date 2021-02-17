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
  @Input() films       : Film[];
  @Input() movies      : Movie[];
  @Input() series      : Serie[];
  @Input() button      : string;
  @Input() search      : string;
  @Input() genreId     : number;
  @Input() rating      : string;
  public   showButton  : boolean;
  public   lastLength  : number;

 constructor(  private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService ) {
    this.showButton = true;
  }

  public showDetails( film: Film ): void {
    ( film.title ) ?
      this.moviesService.showDetails( film.id )  :
      this.seriesService.showDetails( film.id );
  }

  public loadMoreFilms(): void {
    // this.disableButton();

    switch( this.button ) {
      case 'inicio'    : return this.moviesService.loadMoreMovies(this.movies, this.rating);
      case 'géneros'   : return this.moviesService.loadMoreMovies(this.movies, '',this.genreId);
      case 'películas' : return this.moviesService.loadMoreMovies(this.movies, this.rating);
      case 'seriesTV'  : return this.seriesService.loadMoreSeries(this.series, this.rating);
      case 'búsqueda'  : return this.searchService.loadMoreFilms(this.films, this.search);
    }
  }

  // private disableButton(): void {
  //   (this.lastLength == this.films.length) ?
  //     this.showButton = false :
  //     this.lastLength = this.films.length;
  // }
}
