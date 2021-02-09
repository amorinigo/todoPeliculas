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

  ngOnInit(): void {
    // console.log(this.series);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper3-container', {
      observer: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper3-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0:    { slidesPerView: 1 },
        350:  { slidesPerView: 2 },
        550:  { slidesPerView: 3 },
        769:  { slidesPerView: 2 },
        845:  { slidesPerView: 3 },
        1100: { slidesPerView: 4 }
      }
    });
  }

  showSerieDetails( id: number ) {
    this.seriesService.showSerieDetails( id );
  }
}
