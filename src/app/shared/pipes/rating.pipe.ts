import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: string): string {
    switch( rating ) {
      case 'nowPlaying' : return 'estrenos';
      case 'upcoming'   : return 'últimas';
      case 'topRated'   : return 'ranking';
      case 'popular'    : return 'más vistas';
    }
  }

}
