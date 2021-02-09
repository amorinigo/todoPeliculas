import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details: MovieDetails;
  public credits: CreditsResponse;
  public recommendedMovies: Movie[];
  public type: string = "Película";
  // public director;
  // public writters;
  // public genres;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private router: Router ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit() {
    let id: number;

    this.activatedRoute.params.subscribe( params => {
      id = params.id;
      this.getInfo( id );

      // console.log( id );

      this.moviesService.page = 1;
      this.moviesService.getRecommendedMovies( id ).subscribe(
        movies => {
          this.recommendedMovies = movies;
          // console.log(this.recommendedMovies);
        }
      );
    });
  }

  getInfo( id: number ) {
    this.moviesService.getMovieDetails( id ).subscribe( details => {
      this.details = details;
      // this.genres = "";
      // Array.from( this.details.genres ).forEach( genre => this.genres += `${ genre.name }, ` );
    });

    this.moviesService.getCredits( id ).subscribe( credits => {
      this.credits = credits;
      // this.director = this.credits.crew.find(
      //   person => person.job == "Director" && person.department == "Directing"
      // );

      // this.writters = this.credits.crew.filter(
      //   person => person.job == "Writer" && person.department == "Writing"
      // );
    });



    // this.genres = "";
    // Array.from( this.details.genres ).forEach( genre => this.genres += `${ genre.name }, ` );

    // this.director = this.credits.crew.find(
    //   person => person.job == "Director" && person.department == "Directing"
    // );

    // this.writters = this.credits.crew.filter(
    //   person => person.job == "Writer" && person.department == "Writing"
    // ).splice(0, 3);

  }
}
