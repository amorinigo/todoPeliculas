import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CreditsResponse } from '@shared/interfaces/credits-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.scss']
})
export class CastSliderComponent implements OnInit, AfterViewInit {
  @Input() credits: CreditsResponse;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-cast-container', {
      observer: true,
      spaceBetween: 20,
      breakpoints: {
        0:    { slidesPerView: 1.5 },
        350:  { slidesPerView: 2.5 },
        550:  { slidesPerView: 3.5 },
        769:  { slidesPerView: 2.5 },
        845:  { slidesPerView: 3.5 },
        1100: { slidesPerView: 4.5 }
      }
    });
  }

  showActorInfo( id: number ) {
    this.moviesService.showActorInfo( id );
  }
}
