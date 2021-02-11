import { Component, OnInit, Input, AfterViewInit }  from '@angular/core';
import { Credits }                                  from '@shared/interfaces/credits.interface';
import { MoviesService }                            from '@shared/services/movies.service';
import { SwipersService }                           from '@shared/services/swipers.service';
import Swiper                                       from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.scss']
})
export class CastSliderComponent implements OnInit, AfterViewInit {
  @Input() credits: Credits;

  constructor( private moviesService:  MoviesService,
               private swipersService: SwipersService ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-cast-container', this.swipersService.castSwiperOptions);
  }

  public showActorInfo( id: number ): Promise<boolean> {
    return this.moviesService.showActorInfo( id );
  }
}
