import { Injectable }        from '@angular/core';
import { Router }            from '@angular/router';
import { MoviesHttpService } from './movies-http.service';
import { Movie }             from '../interfaces/movies-response.interface';
import { style }             from 'environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider : boolean;
  public style          : object;
  public arePages       : boolean;
  public ratings        : string[];


  constructor( private moviesHttpSvc : MoviesHttpService,
               private router        : Router ) {
    this.showMainSlider = true;
    this.style = style;
    this.ratings = ['nowPlaying', 'upcoming', 'topRated', 'popular'];
  }


  public load60Movies( movies: Movie[], rating: string = 'nowPlaying' ): void {
    this.loadMoviesInQuantity( 3, movies, rating, true );
  }


  public loadManyMovies( movies: Movie[], rating: string ): void {
    this.loadMoviesInQuantity( 6, movies, rating, true );
    window.scrollTo(0, 600);
  }


  public loadMoviesInQuantity(
    quantity: number, movies: Movie[], rating: string, resetPage?: boolean, genreId?: number
  ) {

    if( resetPage ) this.moviesHttpSvc.page = 1;
    for(let i = 1; i <= quantity; i++) this.getMovies( movies, rating, genreId );

  }


  public getMovies( movies: Movie[], rating: string, genreId?: number ) {
    if( !rating ) return this.router.navigate( ['inicio'] );

    this.moviesHttpSvc.getResponseOf( rating ).subscribe( resp => {
      this.pushResponse( movies, resp.results, genreId );
      this.inspectPages( this.moviesHttpSvc.page, resp.total_pages );
    });

    this.moviesHttpSvc.page++;

  }


  private pushResponse( movies: Movie[], resp: Movie[], genreId?: number ) {
    (genreId) ? 
        movies.push( ...this.filterByGenre( resp, genreId ) ) : 
        movies.push( ...resp.filter( movie => movie.poster_path ) );
  }


  private filterByGenre( resp: Movie[], genreId: number ): Movie[] {
    return resp.filter( movie => movie.poster_path && movie.genre_ids.includes( genreId ) );
  }


  public filterAndCut( resp: Movie[], start: number, end: number ): Movie[] {
    return resp.filter( movie => movie.poster_path ).splice(start, end);
  }


  public inspectPages( httpPage: number, responsePages: number ): void {
    ( httpPage >= responsePages ) ? this.arePages = false : this.arePages = true;
  }


  public loadMoreMovies( movies: Movie[], rating: string = 'popular', genreId?: number ): void {
    ( genreId ) ?
      this.loadMoviesInQuantity(5, movies, rating, false, genreId) :
      this.loadMoviesInQuantity(1, movies, rating);
  }


  public loadGenres( movies: Movie[], genreId: number, rating: string = 'popular' ): void {
    this.loadMoviesInQuantity(10, movies, rating, true, genreId);
    window.scrollTo(0, 600);
  }


  public showDetails( movieId: number ): Promise<boolean> {
    return this.router.navigate( ['película-detalles', movieId] );
  }


  public showActor( actorId: number ): Promise<boolean> {
    return this.router.navigate( ['persona', actorId] );
  }

  
  public convertParam( param: string ): string {
    switch( param ) {
      case 'últimas'    : return 'nowPlaying';
      case 'estrenos'   : return 'upcoming';
      case 'ranking'    : return 'topRated';
      case 'más vistas' : return 'popular';
    }
  }
}
