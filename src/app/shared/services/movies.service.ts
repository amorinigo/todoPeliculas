import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresResponse, Genre } from '@shared/interfaces/genres-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesResponse } from '@shared/interfaces/movies-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { Router } from '@angular/router';
import { PersonResponse } from '@shared/interfaces/person-response.interface';

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

  constructor( private http: HttpClient,
               private router: Router ) {}

  getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${this.url}genre/movie/list`, {params: this.params})
                .pipe( map( response => response.genres ) );
  }

  getNowPlaying(): Observable<Movie[]> {

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
      case 'últimas'    :  return this.getNowPlaying(); // LOS CASE DEBEN SER NÚMEROS.
      case 'estrenos'   :  return this.getUpcoming(); // LOS CASE DEBEN SER NÚMEROS.
      case 'ranking'    :  return this.getTopRated(); // LOS CASE DEBEN SER NÚMEROS.
      case 'más vistas' :  return this.getPopular(); // LOS CASE DEBEN SER NÚMEROS.
    };
  }

  getCredits( id: number ): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${ this.url }movie/${ id }/credits`, {
      params: this.params
    });
  }

  getMovieDetails( id: number ): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${ this.url }movie/${ id }`, { params: this.params });
  }

  showMovieDetails( id: number ) {
    this.router.navigate(['película-detalles', id]);
    window.scrollTo(0,0);
  }

  getRecommendedMovies( id: number ): Observable<any> {
    return this.http.get<any>(`${ this.url }movie/${ id }/recommendations`, {
      params: this.params
    }).pipe( map( resp => resp.results ) );
  }

  showActorInfo( id: number ) {
    this.router.navigate(['persona', id]);
    window.scrollTo(0, 0);
  }

  getPersonDetails( id: number ): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${ this.url }person/${ id }`, { params: this.params });
  }
}
