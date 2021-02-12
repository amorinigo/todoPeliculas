import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(title: string): string {
    switch( title ) {
      case 'Estrenos'   : return title;
      case 'Películas'  : return title;
      case 'Ranking'    : return 'Películas más valoradas';
      case 'Más vistas' : return 'Películas más vistas';
    }
  }

}
