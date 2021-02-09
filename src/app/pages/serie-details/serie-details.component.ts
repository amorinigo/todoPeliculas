import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { SerieDetailsResponse } from '@shared/interfaces/serie-details-response.interface';
import { Serie } from '@shared/interfaces/series-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit {
  public serieDetails: SerieDetailsResponse;
  public serieCredits: CreditsResponse;
  // public genres: string = "";
  // public creators;
  public type: string = "Serie";
  public recommendedSeries: Serie[];

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.getSerieInfo( params.id );
    });
  }

  getSerieInfo( id: number ) {
    this.seriesService.page = 1;

    this.seriesService.getSerieDetails( id ).subscribe( serieDetails =>  {
      this.serieDetails = serieDetails;
      // console.log( this.serieDetails );

      // this.genres = "";
      // Array.from( this.serieDetails.genres ).forEach( genre => this.genres += `${ genre.name }, ` );
    });

    this.seriesService.getSerieCredits( id ).subscribe( credits => {
      this.serieCredits = credits;
      // console.log( this.serieCredits );

      // this.creators = this.serieCredits.crew.filter(
      //   person => person.job == "Executive Producer" && person.department == "Production"
      // ).splice(0, 3);
    });

    this.seriesService.getRecommendedSeries( id ).subscribe( series => {
      this.recommendedSeries = series;
      // console.log( this.recommendedSeries );
    });
  }

}
