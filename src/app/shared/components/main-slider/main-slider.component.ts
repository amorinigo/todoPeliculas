import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  @Input() films: Movie[];

  constructor( private moviesService: MoviesService ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const swiper = new Swiper('.main-swiper', this.moviesService.mainSwiperOptions)
  }

  showDetails( id: number ) { this.moviesService.showMovieDetails( id ); }
}
