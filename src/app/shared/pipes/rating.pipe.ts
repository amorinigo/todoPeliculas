import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(title: string): string {
    switch( title ) {
      case 'estrenos'   : return 'Estrenos';
      case 'últimas'    : return 'Películas';
      case 'ranking'    : return 'Películas más valoradas';
      case 'más vistas' : return 'Películas más vistas';
    }
  }

}
