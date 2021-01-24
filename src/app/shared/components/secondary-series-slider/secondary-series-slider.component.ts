import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination ]);

@Component({
  selector: 'app-secondary-series-slider',
  templateUrl: './secondary-series-slider.component.html',
  styleUrls: ['./secondary-series-slider.component.scss']
})
export class SecondarySeriesSliderComponent implements OnInit, AfterViewInit {
  @Input() series: Serie[];
  public swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    console.log(this.series);
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper3-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper3-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      }
    });
  }

}
