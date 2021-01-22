import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresResponse, Genre } from '@shared/interfaces/genres-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesResponse } from '@shared/interfaces/movies-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url: string = "https://api.themoviedb.org/3/";
  private page: number = 1;
  private params = {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: this.page.toString()
  }

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${this.url}genre/movie/list`, {params: this.params})
              .pipe( map( response => response.genres ) );
  }

  getPremieres(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/now_playing`, {
      params: this.params
    }).pipe( map( response => response.results ) );
  }

  getPopular(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/popular`, {
      params: this.params
    }).pipe( map( response => response.results ) );
  }

  getTopRated(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${this.url}movie/top_rated`, {
      params: this.params
    }).pipe( map( response => response.results ) );
  }
}