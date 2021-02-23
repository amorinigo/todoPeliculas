import { HttpClient }           from '@angular/common/http';
import { Injectable }           from '@angular/core';
import { Params, Router }               from '@angular/router';
import { url, params }          from 'environments/environment.prod';
import { Observable, of }       from 'rxjs';
import { catchError }           from 'rxjs/operators';
import { MoviesService }        from './movies.service';
import { Film, SearchResponse } from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class SearchService {

  public page: number = 1;
  private get params(): Params { return { ...params, page: String( this.page ) } };

  public areMovies   : boolean;
  public showSpinner : boolean;

  constructor( private http      : HttpClient,
               private moviesSvc : MoviesService,
               private router    : Router ) {}

               
  public getSearch( query: string ): Observable<SearchResponse> {
    const params: Params = { ... this.params, query, include_adult: 'false' };

    return this.http.get<SearchResponse>(`${ url }/search/multi`, { params })
               .pipe( catchError( error => of(null) ) );
  }
  
  private performFiltering( films: Film[] ): Film[] {
    return films.filter(
      film => film.poster_path && ( film.media_type == 'movie' || film.media_type == 'tv' )
    );
  }

  public loadMoreFilms( films: Film[], query: string, resetPage?: boolean ): void {
    if( resetPage ) this.page = 1;

    this.getSearch( query ).subscribe( resp => {
      if( !resp ) return this.router.navigate( ['inicio'] );

      films.push( ... this.performFiltering( resp.results ) );
      this.moviesSvc.inspectPages( this.page, resp.total_pages);
      this.hideItems( films.length );
    });

    this.page++;
    
  }

  private hideItems( length: number ) {
    this.showSpinner = false;
    ( length == 0 ) ? this.areMovies = false : this.areMovies = true;
  }


  public load5pagesOfFilms( films: Film[], query: string ): void {
    this.showSpinner = true;
    this.areMovies   = true;

    for(let i = 1; i <= 5; i++) this.loadMoreFilms( films, query, true );
    window.scrollTo(0, 0);
  }

}
