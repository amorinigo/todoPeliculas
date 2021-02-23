import { Component, Input, AfterViewInit }  from '@angular/core';
import { SwipersService }                   from 'app/films/services/swipers.service';
import { MoviesService }                    from 'app/movies/services/movies.service';
import { Credits }                          from 'app/details/interfaces/credits.interface';
import Swiper                               from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.scss']
})
export class CastSliderComponent implements AfterViewInit {
  @Input() credits: Credits;

  constructor( private moviesService  : MoviesService,
               private swipersService : SwipersService ) {}

  ngAfterViewInit(): void {
    const swiper = new Swiper( '.swiper-cast-container', this.swipersService.configThree );
  }

  public showActor( id: number ): Promise<boolean> {
    return this.moviesService.showActor( id );
  }
}
