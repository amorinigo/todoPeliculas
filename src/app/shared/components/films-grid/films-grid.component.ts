import { Component, OnInit, Input } from '@angular/core';
import { Film } from '@shared/interfaces/search-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import { SearchService } from '@shared/services/search.service';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent implements OnInit {
  @Input() films:         Film[];
  @Input() button:        string;
  @Input() query:         string;
  @Input() genreId:       number;
  public thereAreFilms:   boolean;
  public lastLength:      number;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService ) {
    this.thereAreFilms = true;
  }

  ngOnInit(): void {}

  public showDetails( film: Film ): void {
    (film.title) ?
      this.moviesService.showMovieDetails( film.id ) :
      this.seriesService.showSerieDetails( film.id );
  }

  public loadMoreFilms(): void {
    this.disableButton();

    switch( this.button ) {
      case 'simple1'  : return this.moviesService.loadMoreMovies(this.films);
      case 'simple2'  : return this.seriesService.loadMoreSeries(this.films);
      case 'filtro'   : return this.moviesService.loadMoreMoviesWithFilter(this.films, this.genreId);
      case 'search'   : return this.searchService.loadMoreFilms(this.films, this.query);
    }
  }

  private disableButton(): void {
    (this.lastLength == this.films.length) ?
      this.thereAreFilms = false :
      this.lastLength = this.films.length;
  }
}
