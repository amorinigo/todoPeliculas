import { Injectable }        from '@angular/core';
import { Router }            from '@angular/router';

import { MoviesHttpService } from './movies-http.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { Film }              from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider: boolean;
  public queryWord: string;
  public genreId: number;
  public style    : object;

  constructor( private moviesHttpSvc : MoviesHttpService,
               private router        : Router ) {
    this.showMainSlider = true;
    this.queryWord = "últimas";

    this.style = {
      'font-weight': 'bold',
      'margin-bottom.px': '50'
    };
  }

  public loadMoreMovies( movies: Movie[] | Film[], query: string = 'últimas' ): void {
    this.moviesHttpSvc.getMovies( query ).subscribe( resp => movies.push( ... resp ) );
    this.moviesHttpSvc.page++;
  }

  public loadTheFirst60Movies( movies: Movie[], query: string = 'últimas' ): void {
    this.moviesHttpSvc.page = 1;
    for(let i = 1; i <= 3; i++) this.loadMoreMovies( movies, query );
  }

  public load120movies( movies: Movie[], query: string ): void {
    this.moviesHttpSvc.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreMovies( movies, query);
    window.scrollTo(0, 600);
  }

  public loadMoviesWithFilter( id: number, movies: Movie[] ): void {
    this.queryWord = 'últimas';
    this.moviesHttpSvc.page = 1;
    for(let i = 1; i <= 10; i++) this.loadMoreMoviesWithFilter( movies, id );
    window.scrollTo(0, 600);
  }

  public loadMoreMoviesWithFilter( movies: Movie[] | Film[], id: number ): void {
    for(let i = 1; i <= 3; i++) {
      this.moviesHttpSvc.getMovies( this.queryWord ).subscribe(
        resp => movies.push( ... resp.filter( movie => movie.genre_ids.includes( id ) ) )
      );

      this.moviesHttpSvc.page++;
    }
  }

  public runMoviesQuery( movies: Movie[], word: string ): Movie[] {
    this.loadTheFirst60Movies( movies, word );
    return movies;
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.router.navigate(['película-detalles', id]);
  }

  public showActorInfo( id: number ): Promise<boolean> {
    return this.router.navigate(['persona', id]);
  }
}
