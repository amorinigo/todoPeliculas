import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MoviesService }  from '@shared/services/movies.service';
import { SwipersService } from '@shared/services/swipers.service';
import { Movie }          from '@shared/interfaces/movies-response.interface';
import Swiper, { Pagination, Autoplay } from 'swiper';

Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  @Input() films: Movie[];

  constructor( private moviesService: MoviesService,
               private swipersService: SwipersService ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.main-swiper', this.swipersService.mainSwiperOptions)
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.moviesService.showMovieDetails( id );
  }
}
