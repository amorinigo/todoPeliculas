import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService }      from '@shared/services/series.service';
import { SerieDetails }       from '@shared/interfaces/serie-details.interface';
import { Serie }              from '@shared/interfaces/series-response.interface';
import { Credits }            from '@shared/interfaces/credits.interface';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.scss']
})
export class SerieDetailsComponent implements OnInit {
  public serieDetails:      SerieDetails;
  public serieCredits:      Credits;
  public recommendedSeries: Serie[];
  public type:              string;

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = false;
    this.type = "Serie";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getSerieInfo( params.id ) );
  }

  private getSerieInfo( id: number ): void {

    this.seriesService.getSerieDetails( id ).subscribe( serieDetails => {
      this.serieDetails = serieDetails;
      window.scrollTo(0,0);
    });

    this.seriesService.getSerieCredits( id ).subscribe( credits => this.serieCredits = credits );

    this.seriesService.page = 1;

    this.seriesService.getRecommendedSeries( id ).subscribe(
      series => this.recommendedSeries = series
    );

  }

}
