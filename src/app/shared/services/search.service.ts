import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Film, SearchResponse } from '@shared/interfaces/search-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string = "https://api.themoviedb.org/3";
  public page: number = 1;

  constructor( private http: HttpClient ) { }

  private get params(): Params {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: String( this.page )
    }
  }

  getSearch( query: string ): Observable<Film[]> {
    const params: Params = { ... this.params, query: query, include_adult: 'false' };
    return this.http.get<SearchResponse>(`${ this.url }/search/multi`, { params })
               .pipe(
                  map(
                    resp => resp.results.filter(
                      film => film.poster_path &&
                              ( film.media_type == 'movie' || film.media_type == 'tv' )
                    )
                  )
               );
  }

  loadMoreFilms( films: Film[], query: string ) {
    console.log( query );
    console.log( this.page );
    this.getSearch( query ).subscribe( resp => films.push( ... resp ) );
    this.page++;
  }

  load5pagesOfFilms( films: Film[], query: string ) {
    this.page = 1;
    for(let i = 1; i <= 5; i++) this.loadMoreFilms( films, query );
    window.scrollTo(0, 0);
  }
}
