import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  @Input() films: Movie[];    // Movie[] || Serie[];

  constructor() {}

  ngOnInit(): void {
    // console.log( this.films );
  }

  ngAfterViewInit() {
    const mySwiper = new Swiper('.main-swiper', {
      loop: true,
      pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      }
    })
  }
}
