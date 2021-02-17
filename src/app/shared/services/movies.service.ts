import { Injectable }        from '@angular/core';
import { Router }            from '@angular/router';
import { MoviesHttpService } from './movies-http.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';

// export interface Data {
//   movies     :  Movie[];
//   rating     :  string | 'últimas';
//   quantity  ?:  number;
//   resetPage ?:  boolean;
//   genreId   ?:  number;
// }

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider : boolean;
  public style          : object;

  constructor( private moviesHttpSvc : MoviesHttpService,
               private router        : Router ) {
    this.showMainSlider = true;

    this.style = {
      'font-weight': 'bold',
      'margin-bottom.px': '50'
    };
  }

  public load60Movies( movies: Movie[], rating: string = 'últimas' ): void {
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
      this.moviesHttpSvc.getMovies(rating).subscribe(resp => this.filterResp(resp,movies,genreId)) :
      this.moviesHttpSvc.getMovies(rating).subscribe(resp => movies.push(...resp));

    this.moviesHttpSvc.page++;
  }

  private filterResp( resp: Movie[], movies: Movie[], genreId: number ): void {
    movies.push( ...resp.filter( movie => movie.genre_ids.includes( genreId ) ) );
  }

  public loadMoreMovies( movies: Movie[], rating: string = 'últimas', genreId?: number ): void {
    ( genreId ) ?
      this.loadMoviesInQuantity(3, movies, rating, false, genreId)  :
      this.loadMoviesInQuantity(1, movies, rating);
  }

  public loadGenres( movies: Movie[], genreId: number, rating: string = 'últimas' ): void {
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
