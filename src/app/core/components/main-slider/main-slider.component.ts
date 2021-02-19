import { AfterViewInit, Component, Input }  from '@angular/core';
import Swiper, { Pagination, Autoplay }     from 'swiper';
import { SwipersService }                   from '@shared/services/swipers.service';
import { MoviesService }                    from '@shared/services/movies.service';
import { Movie }                            from '@shared/interfaces/movies-response.interface';

Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements AfterViewInit {
  @Input() movies: Movie[];

  constructor( private moviesService : MoviesService,
               private swipersService: SwipersService ) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper( '.main-swiper', this.swipersService.configOne );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.moviesService.showDetails( id );
  }
}
