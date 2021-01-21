import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { SeriesService } from '@shared/services/series.service';
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([ Pagination, Autoplay ]);

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
    this.seriesService.getPopularSeries().subscribe( popularSeries => {
      this.series = popularSeries.splice(0, 10);
      console.log(this.series);
    });
  }

  ngAfterViewInit() {
    let mySwiper = new Swiper('.series-swiper-container', {
      spaceBetween: 10,
      pagination: {
        el: '.series-swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      slidesPerView: 3
    })
  }

}
