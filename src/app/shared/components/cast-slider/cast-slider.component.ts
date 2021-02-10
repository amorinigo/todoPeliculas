import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Credits } from '@shared/interfaces/credits.interface';
import { MoviesService } from '@shared/services/movies.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.scss']
})
export class CastSliderComponent implements OnInit, AfterViewInit {
  @Input() credits: Credits;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-cast-container', this.moviesService.castSwiperOptions);
  }

  showActorInfo( id: number ) { this.moviesService.showActorInfo( id ); }
}
