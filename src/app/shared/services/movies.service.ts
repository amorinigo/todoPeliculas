import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';

import { MovieRequestsService }   from './movie-requests.service';
import { Movie }                  from '@shared/interfaces/movies-response.interface';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  public showMainSlider: boolean;
  public queryWord: string;

  constructor( private movieReqService: MovieRequestsService,
               private router: Router ) {
    this.showMainSlider = true;
    this.queryWord = "últimas";
  }

  public loadMoreMovies( movies: Movie[] ): Movie[] {
    this.movieReqService.getMoviesObservable( this.queryWord ).subscribe(
      resp => movies.push( ... resp.filter( movie => movie.poster_path ) )
    );

    this.movieReqService.page++;
    return movies;
  }

  public loadTheFirst60Movies( movies: Movie[] ): Movie[] {
    this.movieReqService.page = 1;
    for(let i = 1; i <= 3; i++) this.loadMoreMovies( movies );
    return movies;
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
