import { Injectable }        from '@angular/core';
import { Router }            from '@angular/router';
import { MoviesHttpService } from './movies-http.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';

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
    this.loadMoviesInQuantity( 3, movies, rating );
  }

  public loadManyMovies( movies: Movie[], rating: string ): void {
    this.loadMoviesInQuantity( 6, movies, rating );
    window.scrollTo(0, 600);
  }

  public loadMoviesInQuantity( quantity: number, movies: Movie[], rating: string ) {
    this.moviesHttpSvc.page = 1;
    for(let i = 1; i <= quantity; i++) this.loadMoreMovies( movies, rating );
  }

  public loadMoreMovies( movies: Movie[], rating: string = 'últimas', genreId?: number ): void {
    if( genreId ) return this.loadGenresInQuantity(3, movies, genreId, rating);
    this.moviesHttpSvc.getMovies( rating ).subscribe( resp => movies.push( ... resp ) );
    this.moviesHttpSvc.page++;
  }











  // genre.service.ts. FUNCIONA. NO TOCAR ESTO.
  public loadGenres( movies: Movie[], genreId: number, rating: string = 'últimas' ): void {
    this.loadGenresInQuantity(10, movies, genreId, rating, true);
    window.scrollTo(0, 600);
  }

  public loadGenresInQuantity(
    quantity: number, movies: Movie[], genreId: number, rating: string, resetPage?: boolean
  ) {
    if( resetPage ) this.moviesHttpSvc.page = 1;

    for(let i = 1; i <= quantity; i++) {
      this.moviesHttpSvc.getMovies( rating ).subscribe( resp => {
        movies.push( ...this.filterByGenre( resp, genreId ) );
      });
      this.moviesHttpSvc.page++;
    }
  }

  filterByGenre( movies: Movie[], genreId: number ): Movie[] {
    return movies.filter( movie => movie.genre_ids.includes( genreId ) );
  }
  // acá termina genre.service.ts. FUNCIONA. NO TOCAR ESTO.











  // NO TOCAR ESTO, FUNCIONA BIEN.
  public showDetails( movieId: number ): Promise<boolean> {
    return this.router.navigate( ['película-detalles', movieId] );
  }

  public showActor( actorId: number ): Promise<boolean> {
    return this.router.navigate( ['persona', actorId] );
  }
  // NO TOCAR ESTO, FUNCIONA BIEN.
}
