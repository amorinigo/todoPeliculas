import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Injectable({ providedIn: 'root' })
export class SwipersService {

  constructor() {}

  // movies swipers

  public mainSwiperOptions: SwiperOptions = {
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
  };

  public castSwiperOptions: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0:    { slidesPerView: 1.5 },
      350:  { slidesPerView: 2.5 },
      550:  { slidesPerView: 3.5 },
      769:  { slidesPerView: 2.5 },
      845:  { slidesPerView: 3.5 },
      1100: { slidesPerView: 4.5 },
      1500: { slidesPerView: 5.5 },
      1700: { slidesPerView: 6.5 },
    }
  };

  public filmsSwiperOptions: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0:    { slidesPerView: 1.3 },
      350:  { slidesPerView: 2.3 },
      550:  { slidesPerView: 3.3 },
      769:  { slidesPerView: 2.3 },
      845:  { slidesPerView: 3.3 },
      1100: { slidesPerView: 4.3 },
      1500: { slidesPerView: 5.3 },
      1700: { slidesPerView: 6.3 },
    }
  };

  // series swipers

  public swiperSeries1Options: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 10,
    pagination: {
      el: '.series-1-swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      0:    { slidesPerView: 1 },
      350:  { slidesPerView: 2 },
      550:  { slidesPerView: 3 },
      769:  { slidesPerView: 2 },
      845:  { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
      1700: { slidesPerView: 6 },
    }
  };

  public swiperSeries2Options: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 10,
    pagination: {
      el: '.series-2-swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      0:    { slidesPerView: 1 },
      350:  { slidesPerView: 2 },
      550:  { slidesPerView: 3 },
      769:  { slidesPerView: 2 },
      845:  { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
      1700: { slidesPerView: 6 },
    }
  };
}
