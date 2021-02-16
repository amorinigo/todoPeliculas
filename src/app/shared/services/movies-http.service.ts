import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params }                 from '@angular/router';

import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';

import { Genre, GenresResponse }  from '@shared/interfaces/genres-response.interface';
import { Movie, MoviesResponse }  from '@shared/interfaces/movies-response.interface';
import { MovieDetails }           from '@shared/interfaces/movie-details.interface';
import { Credits }                from '@shared/interfaces/credits.interface';
import { Person }                 from '@shared/interfaces/person.interface';

@Injectable({ providedIn: 'root' })
export class MoviesHttpService {

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

  public getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${this.url}/genre/movie/list`, {params: this.params})
                .pipe( map( response => response.genres ) );
  }

  public getNowPlaying(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}/movie/now_playing`, {params: this.params})
                .pipe( map( response => response.results.filter( movie => movie.poster_path ) ) );
  }

  public getPopular(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}/movie/popular`, {params: this.params})
                .pipe( map( response => response.results.filter( movie => movie.poster_path ) ) );
  }

  public getTopRated(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}/movie/top_rated`, {params: this.params})
                .pipe( map( response => response.results.filter( movie => movie.poster_path ) ) );
  }

  public getUpcoming(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}/movie/upcoming`, {params: this.params})
                .pipe( map( response => response.results.filter( movie => movie.poster_path ) ) );
  }

  public getRecommended( id: number ): Observable<Movie[]> {
    this.page = 1;

    return this.http.get<MoviesResponse>(`${ this.url }/movie/${ id }/recommendations`, {
      params: this.params
    }).pipe( map( resp => resp.results.filter( movie => movie.poster_path ) ) );
  }

  public getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ this.url }/movie/${ id }/credits`, { params: this.params });
  }

  public getDetails( id: number ): Observable<MovieDetails> {
    window.scrollTo(0, 0);
    return this.http.get<MovieDetails>(`${ this.url }/movie/${ id }`, { params: this.params });
  }

  public getPerson( id: number ): Observable<Person> {
    window.scrollTo(0, 0);
    return this.http.get<Person>(`${ this.url }/person/${ id }`, { params: this.params });
  }

  public getMovies( term: string ): Observable<Movie[]> {
    // LOS CASE DEBEN SER EN INGLÉS.
    switch( term ) {
      case 'últimas'    :  return this.getNowPlaying();
      case 'estrenos'   :  return this.getUpcoming();
      case 'ranking'    :  return this.getTopRated();
      case 'más vistas' :  return this.getPopular();
    };
  }
}
