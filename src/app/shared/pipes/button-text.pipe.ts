import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonText'
})
export class ButtonTextPipe implements PipeTransform {

  transform(typeButton: string): string {
    switch( typeButton ) {
      case 'simple1'  : return 'Cargar más películas';
      case 'simple2'  : return 'Cargar más series';
      case 'filtro'   : return 'Cargar más películas';
      case 'search'   : return 'Cargar más resultados';
    }
  }

}
