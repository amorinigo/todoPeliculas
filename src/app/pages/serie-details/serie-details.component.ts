import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from '@shared/services/movies.service';
import { SeriesHttpService } from '@shared/services/series-http.service';
import { SerieDetails }      from '@shared/interfaces/serie-details.interface';
import { Serie }             from '@shared/interfaces/series-response.interface';
import { Credits }           from '@shared/interfaces/credits.interface';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styles: []
})
export class SerieDetailsComponent implements OnInit {
  public details : SerieDetails;
  public credits : Credits;
  public series  : Serie[];

  constructor( private moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute,
               private seriesHttpSvc  : SeriesHttpService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.getInfo( params.id ) );
  }

  private getInfo( id: number ): void {
    this.seriesHttpSvc.getDetails( id ).subscribe( details => this.details = details );
    this.seriesHttpSvc.getCredits( id ).subscribe( credits => this.credits = credits );
    this.seriesHttpSvc.getRecommended( id ).subscribe( series => this.series = series );
  }
}
