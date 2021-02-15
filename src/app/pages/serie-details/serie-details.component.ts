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
  styles: []
})
export class SerieDetailsComponent implements OnInit {
  public details  : SerieDetails;
  public credits  : Credits;
  public series   : Serie[];

  constructor( private moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute,
               private seriesService  : SeriesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getSerieInfo( params.id ) );
  }

  private getSerieInfo( id: number ): void {
    this.seriesService.getSerieDetails( id ).subscribe( details => {
      this.details = details;
      window.scrollTo(0,0);
    });

    this.seriesService.getSerieCredits( id ).subscribe( credits => this.credits = credits );
    this.seriesService.getRecommended( id ).subscribe( series => this.series = series );

  }

}
