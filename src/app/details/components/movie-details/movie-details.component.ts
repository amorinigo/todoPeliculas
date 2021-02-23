import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { MoviesHttpService }  from 'app/movies/services/movies-http.service';
import { MoviesService }      from 'app/movies/services/movies.service';
import { MovieDetails }       from 'app/details/interfaces/movie-details.interface';
import { Movie }              from 'app/movies/interfaces/movies-response.interface';
import { Credits }            from 'app/details/interfaces/credits.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  public details : MovieDetails;
  public credits : Credits;
  public movies  : Movie[];

  constructor( private activatedRoute : ActivatedRoute,
               private moviesHttpSvc  : MoviesHttpService,
               private moviesService  : MoviesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  private getInfo( id: number ): void {
    this.moviesHttpSvc.getDetails( id ).subscribe( details => this.details = details );
    this.moviesHttpSvc.getCredits( id ).subscribe( credits => this.credits = credits );
    this.moviesHttpSvc.getRecommended( id ).subscribe( movies => this.movies = movies );
  }
}
