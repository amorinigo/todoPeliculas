import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SeriesService }      from '@shared/services/series.service';
import { SwipersService }     from '@shared/services/swipers.service';
import { Serie }              from '@shared/interfaces/series-response.interface';
import Swiper, { Pagination } from 'swiper';

Swiper.use([ Pagination ]);

@Component({
  selector: 'app-series-slider',
  templateUrl: './series-slider.component.html',
  styleUrls: ['./series-slider.component.scss']
})
export class SeriesSliderComponent implements OnInit, AfterViewInit {
  public title: string;
  public series: Serie[] = [];

  constructor( private seriesService:  SeriesService,
               private swipersService: SwipersService ) {
    this.title = "Series populares";
  }

  ngOnInit(): void {
    this.seriesService.getSeriesPopular().subscribe(
      series => this.series = series.filter( serie => serie.poster_path ).splice(0, 10)
    );
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.first-series-swiper', this.swipersService.firstSwiperOptions);
  }

  public showSerieDetails( id: number ): Promise<boolean> {
    return this.seriesService.showSerieDetails( id );
  }
}
