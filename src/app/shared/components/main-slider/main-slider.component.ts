import { AfterViewInit, Component, Input }  from '@angular/core';
import { SwipersService }                   from 'app/films/services/swipers.service';
import { MoviesService }                    from 'app/movies/services/movies.service';
import { Movie }                            from 'app/movies/interfaces/movies-response.interface';
import Swiper, { Pagination, Autoplay }     from 'swiper';

Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements AfterViewInit {
  @Input() movies: Movie[];

  constructor( private moviesService  : MoviesService,
               private swipersService : SwipersService ) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper( '.main-swiper', this.swipersService.configOne );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.moviesService.showDetails( id );
  }
}
