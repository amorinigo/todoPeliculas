import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details: MovieDetails;
  public credits: CreditsResponse;
  public genres: string = "";
  public director;
  public writters;
  public recommendedMovies: Movie[];

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private router: Router ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit() {
    let id: number;

    this.activatedRoute.params.subscribe( params => {
      id = params.id;
      this.getInfo( id )

      this.moviesService.getRecommendedMovies( id ).subscribe(
        movies => {
          this.recommendedMovies = movies
          console.log("HOLA")
        }
      );
    });

    // this.moviesService.getRecommendedMovies( id ).subscribe(
    //   movies => {
    //     this.recommendedMovies = movies
    //     console.log("HOLA")
    //   }
    // );
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-cast-container', {
      observer: true,
      spaceBetween: 20,
      breakpoints: {
        0:    { slidesPerView: 1.5 },
        350:  { slidesPerView: 2.5 },
        550:  { slidesPerView: 3.5 },
        769:  { slidesPerView: 2.5 },
        845:  { slidesPerView: 3.5 },
        1100: { slidesPerView: 4.5 }
      }
    });

    const swiperRecMovies = new Swiper('.swiper-recMovies-container', {
      observer: true,
      spaceBetween: 20,
      breakpoints: {
        0:    { slidesPerView: 1.3 },
        350:  { slidesPerView: 2.3 },
        550:  { slidesPerView: 3.3 },
        769:  { slidesPerView: 2.3 },
        845:  { slidesPerView: 3.3 },
        1100: { slidesPerView: 4.3 }
      }
    });
  }

  getInfo( id: number ) {
    this.moviesService.getMovieDetails( id ).subscribe( details => {
      this.details = details;
      this.genres = "";
      Array.from( this.details.genres ).forEach( genre => this.genres += `${ genre.name }, ` );
    });

    this.moviesService.getCredits( id ).subscribe( credits => {
      this.credits = credits;
      // console.log(this.credits);
      this.director = this.credits.crew.find(
        person => person.job == "Director" && person.department == "Directing"
      );
      // console.log( this.director );

      this.writters = this.credits.crew.filter(
        person => person.job == "Writer" && person.department == "Writing"
      );
      // console.log( this.writters );
    });

    this.moviesService.getRecommendedMovies( id ).subscribe(
      movies => this.recommendedMovies = movies
    );
  }

  showDetails( id: number ) {
    this.moviesService.showMovieDetails( id );
  }

  showActorInfo( id: number ) {
    this.moviesService.showActorInfo( id );
    // this.router.navigate(['persona', id]);
    // window.scrollTo(0, 0);
  }
}
