import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MoviesService }  from '@shared/services/movies.service';
import { SeriesService }  from '@shared/services/series.service';
import { SwipersService } from '@shared/services/swipers.service';
import { Movie }          from '@shared/interfaces/movies-response.interface';
import { Serie }          from '@shared/interfaces/series-response.interface';
import Swiper             from 'swiper';

@Component({
  selector: 'app-recommended-slider',
  templateUrl: './recommended-slider.component.html',
  styleUrls: ['./recommended-slider.component.scss']
})
export class RecommendedSliderComponent implements OnInit, AfterViewInit {
  @Input() films: Movie[] | Serie[];
  @Input() type: string;

  constructor( private moviesService:  MoviesService,
               private seriesService:  SeriesService,
               private swipersService: SwipersService ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper(
      '.recommended-swiper-container', this.swipersService.recommendedSwiperOptions
    );
  }

  public showDetails( id: number ): Promise<boolean> {
    if( this.type === "Película" ) return this.moviesService.showMovieDetails( id );
    return this.seriesService.showSerieDetails( id );
  }
}
