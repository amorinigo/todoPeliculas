import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Pagination }               from 'swiper';
import { SeriesHttpService }                from 'app/series/services/series-http.service';
import { SeriesService }                    from 'app/series/services/series.service';
import { SwipersService }                   from 'app/films/services/swipers.service';
import { Serie }                            from 'app/series/interfaces/series-response.interface';
Swiper.use([ Pagination ]);


@Component({
  selector: 'app-series-slider-1',
  templateUrl: './series-slider-1.component.html',
  styleUrls: ['./series-slider-1.component.scss']
})
export class SeriesSlider1Component implements OnInit, AfterViewInit {
  public series: Serie[] = [];

  constructor( private seriesService  : SeriesService,
               private swipersService : SwipersService,
               private seriesHttpSvc  : SeriesHttpService ) {}

  ngOnInit(): void {
    this.seriesHttpSvc.getPopular().subscribe( 
      resp => this.series = resp.results.filter( serie => serie.backdrop_path ).splice(0, 10) 
    );
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper( '.swiper-series-1', this.swipersService.configTwo );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.seriesService.showDetails( id );
  }

  public goToSeries(): Promise<boolean> {
    return this.seriesService.goToSeries();
  }
}
