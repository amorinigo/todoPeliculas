import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(genre: number): string {
    switch( genre ) {
      case 1:  return "Femenino";
      case 2:  return "Masculino";
      default: return "No especificado";
    }
  }

}
