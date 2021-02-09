import { Component, OnInit, Input } from '@angular/core';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { MovieDetails } from '@shared/interfaces/movie-details-response.interface';
import { SerieDetailsResponse } from '@shared/interfaces/serie-details-response.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  @Input() movieDetails: MovieDetails;
  @Input() serieDetails: SerieDetailsResponse;
  @Input() credits:      CreditsResponse;

  constructor() {}

  ngOnInit(): void {
    // console.log( this.movieDetails );
    // console.log( this.serieDetails );
    // console.log( this.credits.crew );
    // this.genres = "";
    // Array.from( this.movieDetails.genres ).forEach( genre => this.genres += `${ genre.name }, ` );

    // this.director = this.credits.crew.find(
    //   person => person.job == "Director" && person.department == "Directing"
    // );

    // this.writters = this.credits.crew.filter(
    //   person => person.job == "Writer" && person.department == "Writing"
    // ).splice(0, 3);


    // console.log("serieDetails");

    // Array.from( this.serieDetails.genres ).forEach( genre => this.genres += `${ genre.name }, ` );
    // this.creators = this.credits.crew.filter(
    //   person => person.job == "Executive Producer" && person.department == "Production"
    // ).splice(0, 3);
  }
}
