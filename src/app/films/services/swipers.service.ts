import { Injectable }    from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Injectable({ providedIn: 'root' })
export class SwipersService {
  public configOne: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  };

  public configTwo: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 10,
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
  }

  public configThree: SwiperOptions = { ...this.configTwo, spaceBetween: 20 };
}


