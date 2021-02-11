import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { MoviesService }        from '@shared/services/movies.service';
import { MovieDetails }         from '@shared/interfaces/movie-details.interface';
import { Movie }                from '@shared/interfaces/movies-response.interface';
import { Credits }              from '@shared/interfaces/credits.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details:           MovieDetails;
  public credits:           Credits;
  public recommendedMovies: Movie[];
  public type:              string;

  constructor( private activatedRoute:  ActivatedRoute,
               private movieReqService: MovieRequestsService,
               private moviesService:   MoviesService ) {
    this.moviesService.showMainSlider = false;
    this.type = "Película";
  }

  ngOnInit():void {
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  private getInfo( id: number ): void {
    this.movieReqService.getMovieDetails( id ).subscribe( details => {
      this.details = details;
      window.scrollTo(0, 0);
    });

    this.movieReqService.getCredits( id ).subscribe( credits => this.credits = credits );

    this.movieReqService.page = 1;

    this.movieReqService.getRecommendedMovies( id ).subscribe(
      movies => this.recommendedMovies = movies
    );
  }
}
