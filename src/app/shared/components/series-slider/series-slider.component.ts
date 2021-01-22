import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { SeriesService } from '@shared/services/series.service';
import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination ]);

@Component({
  selector: 'app-series-slider',
  templateUrl: './series-slider.component.html',
  styleUrls: ['./series-slider.component.scss']
})
export class SeriesSliderComponent implements OnInit, AfterViewInit {
  public title: string = "Series populares";
  public series: Serie[] = [];
  public mySwiper: Swiper;

  // @HostListener("window:resize")
  // onResize() {
  //   let currentWidth = document.documentElement.clientWidth;
  //   if(currentWidth < 350) return this.mySwiper.params.slidesPerView = 1;
  //   if(currentWidth > 1100) return this.mySwiper.params.slidesPerView = 4;
  //   if(currentWidth > 550) return this.mySwiper.params.slidesPerView = 3;
  //   if(currentWidth > 350) return this.mySwiper.params.slidesPerView = 2;
  // }

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getPopularSeries().subscribe( popularSeries => {
      this.series = popularSeries.splice(0, 10);
    });
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.series-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.series-swiper-pagination',
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
    })
  }

}
