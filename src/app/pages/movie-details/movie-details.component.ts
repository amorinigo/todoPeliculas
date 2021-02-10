import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from '@shared/interfaces/credits.interface';
import { MovieDetails } from '@shared/interfaces/movie-details.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details: MovieDetails;
  public credits: Credits;
  public recommendedMovies: Movie[];
  public type: string = "Película";

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  getInfo( id: number ) {
    this.moviesService.getMovieDetails( id ).subscribe( details => this.details = details );
    this.moviesService.getCredits( id ).subscribe( credits => this.credits = credits );

    this.moviesService.page = 1;
    this.moviesService.getRecommendedMovies( id ).subscribe( movies => this.recommendedMovies = movies );
  }
}
