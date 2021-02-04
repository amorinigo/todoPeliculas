import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresResponse, Genre } from '@shared/interfaces/genres-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesResponse } from '@shared/interfaces/movies-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { Cast, CastResponse } from '@shared/interfaces/cast-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public showMainSlider: boolean = true;
  private url: string = "https://api.themoviedb.org/3/";
  public page: number = 1;

  get params() {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: String( this.page )
    }
  }

  constructor(private http: HttpClient) {}

  getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${this.url}genre/movie/list`, {params: this.params})
                .pipe( map( response => response.genres ) );
  }

  getPremieres(): Observable<Movie[]> {

    return  this.http.get<MoviesResponse>(`${this.url}movie/now_playing`, {params: this.params})
                .pipe( map( response => response.results ) );
  }

  getPopular(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/popular`, {params: this.params})
                .pipe( map( response => response.results ) );
  }

  getTopRated(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/top_rated`, {params: this.params})
                .pipe( map( response => response.results ) );
  }

  getUpcoming(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/upcoming`, {params: this.params})
                .pipe( map( response => response.results ) );
  }

  getMoviesObservable( term: string ): Observable<Movie[]> {
    switch( term ) {
      case 'últimas'    :  return this.getUpcoming();
      case 'estrenos'   :  return this.getPremieres();
      case 'ranking'    :  return this.getTopRated();
      case 'más vistas' :  return this.getPopular();
    };
  }

  getCast( id: number ): Observable<CastResponse> {
    return this.http.get<CastResponse>(`${ this.url }movie/${ id }/credits`, { params: this.params })
  }

  getMovieDetails( id: number ): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${ this.url }movie/${ id }`, { params: this.params });
  }
}
