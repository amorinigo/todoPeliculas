import { Component, Input, AfterViewInit }  from '@angular/core';
import Swiper, { Pagination }               from 'swiper';
import { SeriesService }                    from 'app/series/services/series.service';
import { SwipersService }                   from 'app/films/services/swipers.service';
import { Serie }                            from 'app/series/interfaces/series-response.interface';
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
    const swiper = new Swiper( '.swiper-series-2', this.swipersService.configTwo );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.seriesService.showDetails( id );
  }
}
