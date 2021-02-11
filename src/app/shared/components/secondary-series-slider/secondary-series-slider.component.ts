import { Component, OnInit, Input, AfterViewInit }  from '@angular/core';
import { SeriesService }      from '@shared/services/series.service';
import { SwipersService }     from '@shared/services/swipers.service';
import { Serie }              from '@shared/interfaces/series-response.interface';
import Swiper, { Pagination } from 'swiper';

Swiper.use([ Pagination ]);

@Component({
  selector: 'app-secondary-series-slider',
  templateUrl: './secondary-series-slider.component.html',
  styleUrls: ['./secondary-series-slider.component.scss']
})
export class SecondarySeriesSliderComponent implements OnInit, AfterViewInit {
  @Input() series: Serie[];

  constructor( private seriesService:  SeriesService,
               private swipersService: SwipersService ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.second-series-swiper', this.swipersService.secondSwiperOptions);
  }

  public showSerieDetails( id: number ): Promise<boolean> {
    return this.seriesService.showSerieDetails( id );
  }
}
