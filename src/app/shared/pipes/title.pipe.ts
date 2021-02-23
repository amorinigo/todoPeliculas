import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'title' })
export class TitlePipe implements PipeTransform {

  transform( rating: string ): string {
    switch( rating ) {
      case 'upcoming'   : return 'Estrenos';
      case 'topRated'   : return 'Películas más valoradas';
      case 'popular'    : return 'Películas más vistas';
      case 'nowPlaying' : return 'Últimas';
    }
  }

}
