import { Component, Input, AfterViewInit }  from '@angular/core';
import { MoviesService }                    from '@shared/services/movies.service';
import { SeriesService }                    from '@shared/services/series.service';
import { SwipersService }                   from '@shared/services/swipers.service';
import { Film }                             from '@shared/interfaces/search-response.interface';
import Swiper                               from 'swiper';


@Component({
  selector: 'app-films-slider',
  templateUrl: './films-slider.component.html',
  styleUrls: ['./films-slider.component.scss']
})
export class FilmsSliderComponent implements AfterViewInit {
  @Input() films: Film[];

  constructor( private moviesService  : MoviesService,
               private seriesService  : SeriesService,
               private swipersService : SwipersService ) {}

  ngAfterViewInit(): void {
    const swiper = new Swiper( '.films-swiper', this.swipersService.configThree );
  }

  public showDetails( id: number ): void {
    (this.films[0].title) ? this.moviesService.showDetails(id) : this.seriesService.showDetails(id);
  }
}
