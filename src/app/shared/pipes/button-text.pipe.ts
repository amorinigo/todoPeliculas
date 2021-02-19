import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonText'
})
export class ButtonTextPipe implements PipeTransform {

  transform( typeButton: string ): string {
    switch( typeButton ) {
      case 'inicio'     : return 'Cargar más películas';
      case 'géneros'    : return 'Cargar más películas';
      case 'películas'  : return 'Cargar más películas';
      case 'seriesTV'   : return 'Cargar más series';
      case 'búsqueda'   : return 'Cargar más resultados';
    }
  }

}
