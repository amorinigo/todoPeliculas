import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from '@shared/interfaces/credits.interface';
import { SerieDetails } from '@shared/interfaces/serie-details.interface';
import { Serie } from '@shared/interfaces/series-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit {
  public serieDetails: SerieDetails;
  public serieCredits: Credits;
  public recommendedSeries: Serie[];
  public type: string = "Serie";

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getSerieInfo( params.id ) );
  }

  getSerieInfo( id: number ) {
    this.seriesService.getSerieDetails( id ).subscribe( serieDetails => this.serieDetails = serieDetails );
    this.seriesService.getSerieCredits( id ).subscribe( credits => this.serieCredits = credits );

    this.seriesService.page = 1;
    this.seriesService.getRecommendedSeries( id ).subscribe( series => this.recommendedSeries = series );
  }

}
