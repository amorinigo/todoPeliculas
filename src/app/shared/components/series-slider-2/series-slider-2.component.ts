import { Component, Input, AfterViewInit }  from '@angular/core';
import Swiper, { Pagination }               from 'swiper';
import { SwipersService }                   from '@shared/services/swipers.service';
import { SeriesService }                    from '@shared/services/series.service';
import { Serie }                            from '@shared/interfaces/series-response.interface';
Swiper.use([ Pagination ]);

@Component({
  selector: 'app-series-slider-2',
  templateUrl: './series-slider-2.component.html',
  styleUrls: ['./series-slider-2.component.scss']
})
export class SeriesSlider2Component implements AfterViewInit {
  @Input() series: Serie[];

  constructor( private seriesService  : SeriesService,
               private swipersService : SwipersService ) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-series-2', this.swipersService.swiperSeries2Options);
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.seriesService.showDetails( id );
  }
}
