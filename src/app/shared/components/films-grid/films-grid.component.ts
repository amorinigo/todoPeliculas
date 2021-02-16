import { Component, Input } from '@angular/core';
import { MoviesService }    from '@shared/services/movies.service';
import { SeriesService }    from '@shared/services/series.service';
import { SearchService }    from '@shared/services/search.service';
import { Film }             from '@shared/interfaces/search-response.interface';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent {
  @Input() films    : Film[];
  @Input() button   : string;
  @Input() query    : string;
  @Input() genreId  : number;
  public showButton : boolean;
  public lastLength : number;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService ) {
    this.showButton = true;
  }

  public showDetails( film: Film ): void {
    (film.title) ? this.moviesService.showDetails(film.id) : this.seriesService.showDetails(film.id);
  }

  public loadMoreFilms(): void {
    this.disableButton();

    switch( this.button ) {
      case 'simple1'  : return this.moviesService.loadMoreMovies(this.films);
      case 'filtro'   : return this.moviesService.loadMoreMoviesWithFilter(this.films, this.genreId);
      case 'simple2'  : return this.seriesService.loadMoreSeries(this.films);
      case 'search'   : return this.searchService.loadMoreFilms(this.films, this.query);
    }
  }

  private disableButton(): void {
    (this.lastLength == this.films.length) ?
      this.showButton = false :
      this.lastLength = this.films.length;
  }
}
