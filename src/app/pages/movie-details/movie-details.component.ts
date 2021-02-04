import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast, CastResponse } from '@shared/interfaces/cast-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details: MovieDetails;
  public cast: CastResponse;
  public genres: string = "";
  public director;
  public writters;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  getInfo( id: number ) {
    this.moviesService.getMovieDetails( id ).subscribe( details => {
      this.details = details;
      Array.from( this.details.genres ).forEach( genre => this.genres += `${ genre.name }, ` );
    });

    this.moviesService.getCast( id ).subscribe( response => {
      this.cast = response;
      this.director = this.cast.crew.find(
        person => person.job == "Director" && person.department == "Directing"
      );
      console.log( this.director );

      this.writters = this.cast.crew.filter(
        person => person.job == "Writer" && person.department == "Writing"
      );
      console.log( this.writters );
    });
  }
}
