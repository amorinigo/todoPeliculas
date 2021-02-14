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
  // @Input() query:         string;
  public thereAreFilms:   boolean;
  public lastLength:      number;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService ) {
    this.thereAreFilms = true;
  }

  ngOnInit(): void {}

  showDetails( film: Film ) {
    if(film.title) {
      this.moviesService.showMovieDetails( film.id );
    } else {
      this.seriesService.showSerieDetails( film.id );
    }
  }

  // loadMoreFilms() {
  //   this.searchService.loadMoreFilms( this.query, this.films );
  //   this.disableButton();
  // }

  private disableButton(): void {
    ( this.lastLength == this.films.length ) ?
      this.thereAreFilms = false :
      this.lastLength = this.films.length;
  }
}
