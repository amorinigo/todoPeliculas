import { Component, Input, OnInit }   from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService }      from '@shared/services/series.service';
import { SearchService }      from '@shared/services/search.service';
import { Film }               from '@shared/interfaces/search-response.interface';
import { Serie }              from '@shared/interfaces/series-response.interface';
import { Movie }              from '@shared/interfaces/movies-response.interface';
import { MoviesHttpService }  from '@shared/services/movies-http.service';
import { SeriesHttpService } from '@shared/services/series-http.service';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent implements OnInit {
  @Input() films       : Film[];
  @Input() movies      : Movie[];
  @Input() series      : Serie[];
  @Input() button      : string;
  @Input() search      : string;
  @Input() genreId     : number;
  @Input() rating      : string;
  public   quedanPages : boolean;

 constructor(  private moviesService: MoviesService,
               private seriesService: SeriesService,
               private searchService: SearchService,
               private seriesHttpSvc: SeriesHttpService,
               private moviesHttpSvc: MoviesHttpService ) {
    this.quedanPages = true;
  }

  ngOnInit(): void {
    if( this.movies ) return this.desabilitarBotón( this.rating );
    if( this.series ) return this.desabilitarBotónSerie( this.rating );
    if( this.films ) return this.desabilitarBotónBúsqueda( this.search );
  }

  public showDetails( film: Film ): void {
    ( film.title ) ?
      this.moviesService.showDetails( film.id )  :
      this.seriesService.showDetails( film.id );
  }

  public loadMoreFilms(): void {
    this.gestionar( this.button );    
    // this.desabilitarBotón( this.rating );
  }

  gestionar( type: string ) {
    switch( type ) {
      case 'inicio'    : return this.inicio();
      case 'géneros'   : return this.géneros();
      case 'películas' : return this.películas();
      case 'seriesTV'  : return this.seriesTV();
      case 'búsqueda'  : return this.búsqueda();
    }
  }

  inicio() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
    this.desabilitarBotón( this.rating );
  };

  géneros() {
    this.moviesService.loadMoreMovies(this.movies, '',this.genreId);
    this.desabilitarBotón( this.rating );
  }

  películas() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
    this.desabilitarBotón( this.rating );
  }


  desabilitarBotón( rating: string ) {
    this.moviesHttpSvc.getResponseOf( rating ).subscribe( resp => {
      if ( this.moviesHttpSvc.page >= resp.total_pages ) this.quedanPages = false;
    });
  }



  seriesTV() {
    this.seriesService.loadMoreSeries(this.series, this.rating);
    this.desabilitarBotónSerie( this.rating );
  }



  desabilitarBotónSerie( rating: string ) {
    this.seriesHttpSvc.getResponseOf( rating ).subscribe( resp => {
      if( this.seriesHttpSvc.page >= resp.total_pages ) this.quedanPages = false;
    });
  }


  búsqueda() {
    this.searchService.loadMoreFilms(this.films, this.search);
    this.desabilitarBotónBúsqueda( this.search );
  };

  desabilitarBotónBúsqueda( query: string ) {
    this.searchService.getSearch( query ).subscribe( resp => {
      if( this.searchService.page >= resp.total_pages ) this.quedanPages = false;
    });
  }
}
