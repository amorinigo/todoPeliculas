import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';

import { MovieRequestsService }   from './movie-requests.service';
import { Movie }                  from '@shared/interfaces/movies-response.interface';
import { Film } from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider: boolean;
  public queryWord: string;
  public genreId: number;

  constructor( private movieReqService: MovieRequestsService,
               private router: Router ) {
    this.showMainSlider = true;
    this.queryWord = "últimas";
  }

  public loadMoreMovies( movies: Movie[] | Film[] ): void {
    this.movieReqService.getMoviesObservable( this.queryWord ).subscribe(
      resp => movies.push( ... resp )
    );

    this.movieReqService.page++;
  }

  public loadTheFirst60Movies( movies: Movie[] ): void {
    this.movieReqService.page = 1;
    for(let i = 1; i <= 3; i++) this.loadMoreMovies( movies );
  }

  public load120movies( movies: Movie[] ): void {
    this.movieReqService.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreMovies( movies );
  }

  public loadMoviesWithFilter( id: number, movies: Movie[] ) {
    this.movieReqService.page = 1;

    for(let i = 1; i <= 10; i++) this.loadMoreMoviesWithFilter( movies, id );
  }

  public loadMoreMoviesWithFilter( movies: Movie[] | Film[], id: number ): void {
    for(let i = 1; i <= 3; i++) {
      this.movieReqService.getMoviesObservable( this.queryWord ).subscribe(
        resp => movies.push( ... resp.filter( movie => movie.genre_ids.includes( id ) ) )
      );

      this.movieReqService.page++;
    }
  }

  public runMoviesQuery( word: string, movies: Movie[] ): Movie[] {
    this.queryWord = word;
    this.loadTheFirst60Movies( movies );
    return movies;
  }

  public showMovieDetails( id: number ): Promise<boolean> {
    return this.router.navigate(['película-detalles', id]);
  }

  public showActorInfo( id: number ): Promise<boolean> {
    return this.router.navigate(['persona', id]);
  }
}
