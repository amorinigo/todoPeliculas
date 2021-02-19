import { Injectable }        from '@angular/core';
import { Router }            from '@angular/router';
import { MoviesHttpService } from './movies-http.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { style }             from 'environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider : boolean;
  public style          : object;

  constructor( private moviesHttpSvc : MoviesHttpService,
               private router        : Router ) {
    this.showMainSlider = true;
    this.style          = style;
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

  getMovies( movies: Movie[], rating: string, genreId?: number ) {
    ( genreId ) ?
      this.moviesHttpSvc.getResponseOf( rating ).subscribe(
        resp => this.filterResp( resp.results, movies, genreId )
      ) 
    :
      this.moviesHttpSvc.getResponseOf( rating ).subscribe( resp => movies.push( ...resp.results ) );

    this.moviesHttpSvc.page++;
  }

  public loadMoreMovies( movies: Movie[], rating: string = 'nowPlaying', genreId?: number ): void {
    ( genreId ) ?
      this.loadMoviesInQuantity(5, movies, rating, false, genreId)  :
      this.loadMoviesInQuantity(1, movies, rating);
  }

  private filterResp( resp: Movie[], movies: Movie[], genreId: number ): void {
    movies.push( ...resp.filter( movie => movie.genre_ids.includes( genreId ) ) );
  }

  public loadGenres( movies: Movie[], genreId: number, rating: string = 'nowPlaying' ): void {
    this.loadMoviesInQuantity(10, movies, rating, true, genreId);
    window.scrollTo(0, 600);
  }

  public showDetails( movieId: number ): Promise<boolean> {
    return this.router.navigate( ['película-detalles', movieId] );
  }

  public showActor( actorId: number ): Promise<boolean> {
    return this.router.navigate( ['persona', actorId] );
  }
}
