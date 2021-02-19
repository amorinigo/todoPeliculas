import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params }                 from '@angular/router';
import { url, params }            from 'environments/environment.prod';

import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';

import { Genre, GenresResponse }  from '@shared/interfaces/genres-response.interface';
import { Movie, MoviesResponse }  from '@shared/interfaces/movies-response.interface';
import { MovieDetails }           from '@shared/interfaces/movie-details.interface';
import { Credits }                from '@shared/interfaces/credits.interface';
import { Person }                 from '@shared/interfaces/person.interface';

@Injectable({ providedIn: 'root' })
export class MoviesHttpService {
  public page: number = 1;
  private get params(): Params { return { ... params, page: String( this.page ) } };

  constructor( private http: HttpClient ) {}

  public getNowPlaying(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/now_playing`, {params: this.params});
  }

  public getPopular(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/popular`, {params: this.params});
  }

  public getTopRated(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/top_rated`, {params: this.params});
  }

  public getUpcoming(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/upcoming`, {params: this.params});
  } // response => response.results.filter( movie => movie.poster_path )

  public getRecommended( id: number ): Observable<Movie[]> {
    this.page = 1;

    return this.http.get<MoviesResponse>(`${ url }/movie/${ id }/recommendations`, {
      params: this.params
    }).pipe( map( resp => resp.results.filter( movie => movie.poster_path ) ) );
  }

  public getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ url }/movie/${ id }/credits`, { params: this.params });
  }

  public getDetails( id: number ): Observable<MovieDetails> {
    window.scrollTo(0, 0);
    return this.http.get<MovieDetails>(`${ url }/movie/${ id }`, { params: this.params });
  }

  public getPerson( id: number ): Observable<Person> {
    window.scrollTo(0, 0);
    return this.http.get<Person>(`${ url }/person/${ id }`, { params: this.params });
  }

  public getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${ url }/genre/movie/list`, {params: this.params})
                .pipe( map( response => response.genres ) );
  }

  public getResponseOf( rating: string ): Observable<MoviesResponse> {
    // LOS CASE DEBEN SER EN INGLÉS.
    switch( rating ) {
      case 'nowPlaying'    :  return this.getNowPlaying();   // últimas.
      case 'upcoming'   :  return this.getUpcoming();     // estrenos.
      case 'topRated'    :  return this.getTopRated();     // ranking.
      case 'popular' :  return this.getPopular();      // más vistas.
      default           :  return this.getNowPlaying();
    };
  }
}
