import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Pagination }               from 'swiper';
import { SwipersService }                   from '@shared/services/swipers.service';
import { SeriesService }                    from '@shared/services/series.service';
import { Serie }                            from '@shared/interfaces/series-response.interface';
Swiper.use([ Pagination ]);


@Component({
  selector: 'app-series-slider-1',
  templateUrl: './series-slider-1.component.html',
  styleUrls: ['./series-slider-1.component.scss']
})
export class SeriesSlider1Component implements OnInit, AfterViewInit {
  public series: Serie[] = [];

  constructor( private seriesService  : SeriesService,
               private swipersService : SwipersService ) {
  }

  ngOnInit(): void {
    this.seriesService.getPopular().subscribe( series => this.series = series.splice(0, 10) );
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-series-1', this.swipersService.swiperSeries1Options);
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.seriesService.showDetails( id );
  }

  public goToSeries(): Promise<boolean> {
    return this.seriesService.goToSeries();
  }
}
