import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { Serie } from '@shared/interfaces/series-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import { SeriesService } from '@shared/services/series.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-recommended-slider',
  templateUrl: './recommended-slider.component.html',
  styleUrls: ['./recommended-slider.component.scss']
})
export class RecommendedSliderComponent implements OnInit, AfterViewInit {
  @Input() films: Movie[] | Serie[];
  @Input() type: string;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiperRecMovies = new Swiper('.swiper-recMovies-container', {
      observer: true,
      spaceBetween: 20,
      breakpoints: {
        0:    { slidesPerView: 1.3 },
        350:  { slidesPerView: 2.3 },
        550:  { slidesPerView: 3.3 },
        769:  { slidesPerView: 2.3 },
        845:  { slidesPerView: 3.3 },
        1100: { slidesPerView: 4.3 }
      }
    });
  }

  showDetails( id: number ) {
    if( this.type === "Película" ) {
      return this.moviesService.showMovieDetails( id );
    } else {
      return this.seriesService.showSerieDetails( id );
    }
  }
}
