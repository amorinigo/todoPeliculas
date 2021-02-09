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

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeriesPopular().subscribe( popularSeries => {
      this.series = popularSeries.filter( serie => serie.poster_path ).splice(0, 10);
    });
  }

  ngAfterViewInit() {
    const seriesSwiper = new Swiper('.series-swiper-container', {
      observer: true,
      spaceBetween: 10,
      pagination: {
        el: '.series-swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0:    { slidesPerView: 1 },
        350:  { slidesPerView: 2 },
        550:  { slidesPerView: 3 },
        1100: { slidesPerView: 4 }
      }
    });
  }

  showSerieDetails( id: number ) {
    this.seriesService.showSerieDetails( id );
  }
}
