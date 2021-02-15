import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SeriesService } from '@shared/services/series.service';
import { SwipersService } from '@shared/services/swipers.service';
import { Serie } from '@shared/interfaces/series-response.interface';
import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination ]);


@Component({
  selector: 'app-series-slider-1',
  templateUrl: './series-slider-1.component.html',
  styleUrls: ['./series-slider-1.component.scss']
})
export class SeriesSlider1Component implements OnInit, AfterViewInit {
  public title: string;
  public series: Serie[] = [];

  constructor(private seriesService: SeriesService,
    private swipersService: SwipersService) {
  }

  ngOnInit(): void {
    this.seriesService.getSeriesPopular().subscribe(
      series => this.series = series.filter(serie => serie.poster_path).splice(0, 10)
    );
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.first-series-swiper', this.swipersService.series1SwiperOptions);
  }

  public showSerieDetails(id: number): Promise<boolean> {
    return this.seriesService.showSerieDetails(id);
  }
}
