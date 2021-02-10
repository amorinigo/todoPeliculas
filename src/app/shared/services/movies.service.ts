import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresResponse, Genre } from '@shared/interfaces/genres-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MoviesResponse } from '@shared/interfaces/movies-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details.interface';
import { Credits } from '@shared/interfaces/credits.interface';
import { Router } from '@angular/router';
import { Person } from '@shared/interfaces/person.interface';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public showMainSlider: boolean = true;
  public queryWord = "últimas";
  private url: string = "https://api.themoviedb.org/3/";
  public page: number = 1;

  get params() {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: String( this.page )
    }
  }

  public castSwiperOptions: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0:    { slidesPerView: 1.5 },
      350:  { slidesPerView: 2.5 },
      550:  { slidesPerView: 3.5 },
      769:  { slidesPerView: 2.5 },
      845:  { slidesPerView: 3.5 },
      1100: { slidesPerView: 4.5 }
    }
  };

  public mainSwiperOptions: SwiperOptions = {
    loop: true,
    pagination: {
      el: '.main-swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };

  public recommendedSwiperOptions: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0:    { slidesPerView: 1.3 },
      350:  { slidesPerView: 2.3 },
      550:  { slidesPerView: 3.3 },
      769:  { slidesPerView: 2.3 },
      845:  { slidesPerView: 3.3 },
      1100: { slidesPerView: 4.3 }
    }
  };

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

  getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ this.url }movie/${ id }/credits`, {
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

  getPerson( id: number ): Observable<Person> {
    return this.http.get<Person>(`${ this.url }person/${ id }`, { params: this.params });
  }

  loadMoreMovies( movies: Movie[] ): Movie[] {
    this.getMoviesObservable( this.queryWord ).subscribe(
      resp => movies.push( ... resp.filter( movie => movie.poster_path ) )
    );

    this.page++;

    return movies;
  }

  loadTheFirst60Movies( movies: Movie[] ) { // retorno
    this.page = 1;
    for(let i = 1; i <= 3; i++) this.loadMoreMovies( movies );
  }

  runMoviesQuery( word: string, movies: Movie[] ) { // retorno
    this.queryWord = word;
    this.loadTheFirst60Movies( movies );
  }
}
