import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params }                 from '@angular/router';
import { Observable, of }         from 'rxjs';
import { map, catchError }        from 'rxjs/operators';
import { url, params }            from 'environments/environment.prod';

import { Movie, MoviesResponse }  from '../interfaces/movies-response.interface';
import { Genre, GenresResponse }  from '../interfaces/genres-response.interface';
import { MovieDetails }           from 'app/details/interfaces/movie-details.interface';
import { Credits }                from 'app/details/interfaces/credits.interface';
import { Person }                 from 'app/details/interfaces/person.interface';



@Injectable({ providedIn: 'root' })
export class MoviesHttpService {
  public page: number = 1;
  private get params(): Params { return { ... params, page: String( this.page ) } };

  constructor( private http: HttpClient ) {}


  public getNowPlaying(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/now_playing`, {params: this.params})
                .pipe( catchError( err => of(null) ) );
  }


  public getPopular(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/popular`, {params: this.params})
                .pipe( catchError( err => of(null) ) );
  }


  public getTopRated(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/top_rated`, {params: this.params})
                .pipe( catchError( err => of(null) ) );
  }


  public getUpcoming(): Observable<MoviesResponse> {
    return  this.http.get<MoviesResponse>(`${ url }/movie/upcoming`, {params: this.params})
                .pipe( catchError( err => of(null) ) );
  }


  public getRecommended( id: number ): Observable<Movie[]> {
    this.page = 1;

    return this.http.get<MoviesResponse>(`${ url }/movie/${ id }/recommendations`, {
      params: this.params
    }).pipe( map( resp => resp.results ), catchError( err => of([]) ) );
  }


  public getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ url }/movie/${ id }/credits`, { params: this.params })
               .pipe( catchError( err => of(null) ) );
  }


  public getDetails( id: number ): Observable<MovieDetails> {
    window.scrollTo(0, 0);
    return this.http.get<MovieDetails>(`${ url }/movie/${ id }`, { params: this.params })
               .pipe( catchError( err => of(null) ) );
  }


  public getPerson( id: number ): Observable<Person> {
    window.scrollTo(0, 0);
    return this.http.get<Person>(`${ url }/person/${ id }`, { params: this.params })
               .pipe( catchError( err => of(null) ) );
  }


  public getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${ url }/genre/movie/list`, {params: this.params})
                .pipe( map( response => response.genres ), catchError( err => of(null) ) );
  }

  
  public getResponseOf( rating: string ): Observable<MoviesResponse> {
    switch( rating ) {
      case 'nowPlaying' : return this.getNowPlaying();
      case 'upcoming'   : return this.getUpcoming();
      case 'topRated'   : return this.getTopRated();
      case 'popular'    : return this.getPopular();
    };
  }
}
