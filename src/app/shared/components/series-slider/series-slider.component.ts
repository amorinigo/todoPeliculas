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
    this.seriesService.getSeriesPopular().subscribe(
      series => this.series = series.filter( serie => serie.poster_path ).splice(0, 10)
    );
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.first-series-swiper', this.seriesService.firstSwiperOptions);
  }

  showSerieDetails( id: number ) { this.seriesService.showSerieDetails( id ); }
}
