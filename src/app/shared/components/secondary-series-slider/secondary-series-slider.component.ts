import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { SeriesService } from '@shared/services/series.service';
import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination ]);

@Component({
  selector: 'app-secondary-series-slider',
  templateUrl: './secondary-series-slider.component.html',
  styleUrls: ['./secondary-series-slider.component.scss']
})
export class SecondarySeriesSliderComponent implements OnInit, AfterViewInit {
  @Input() series: Serie[];

  constructor( private seriesService: SeriesService ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const swiper = new Swiper('.second-series-swiper', this.seriesService.secondSwiperOptions);
  }

  showSerieDetails( id: number ) { this.seriesService.showSerieDetails( id ); }
}
