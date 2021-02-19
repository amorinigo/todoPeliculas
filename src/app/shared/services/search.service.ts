import { HttpClient }           from '@angular/common/http';
import { Injectable }           from '@angular/core';
import { Params }               from '@angular/router';
import { url, params }          from 'environments/environment.prod';
import { Observable }           from 'rxjs';
import { map }                  from 'rxjs/operators';
import { Film, SearchResponse } from '@shared/interfaces/search-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public page: number = 1;
  private get params(): Params { return { ...params, page: String( this.page ) } };

  constructor( private http: HttpClient ) {}

  public getSearch( query: string ): Observable<SearchResponse> {
    const params: Params = { ... this.params, query, include_adult: 'false' };

    return this.http.get<SearchResponse>(`${ url }/search/multi`, { params });
  }

  // resp => this.performFiltering( resp.results ) );
  private performFiltering( films: Film[] ): Film[] {
    return films.filter(
      film => film.poster_path && ( film.media_type == 'movie' || film.media_type == 'tv' )
    );
  }

  public loadMoreFilms( films: Film[], query: string ): void {
    this.getSearch( query ).subscribe( resp => films.push( ... resp.results ) );
    this.page++;
  }

  public load5pagesOfFilms( films: Film[], query: string ): void {
    this.page = 1;
    for(let i = 1; i <= 5; i++) this.loadMoreFilms( films, query );
    window.scrollTo(0, 0);
  }
}
