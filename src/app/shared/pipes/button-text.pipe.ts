import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'buttonText' })
export class ButtonTextPipe implements PipeTransform {

  transform( typeButton: string ): string {
    switch( typeButton ) {
      case 'movies' : return 'Cargar más películas';
      case 'series' : return 'Cargar más series';
      case 'films'  : return 'Cargar más resultados';
    }
  }

}
