import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '@shared/interfaces/cast-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public details: MovieDetails;
  public cast: Cast[];

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService ) {}

  ngOnInit() {
    // this.moviesService.isValidPage = false;
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  getInfo( id: number ) {
    this.moviesService.getMovieDetails( id ).subscribe( details => this.details = details );
    this.moviesService.getCast( id ).subscribe( cast => this.cast = cast );
  }

}
