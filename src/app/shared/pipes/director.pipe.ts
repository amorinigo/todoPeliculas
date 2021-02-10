import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '@shared/interfaces/credits.interface';

@Pipe({
  name: 'director'
})
export class DirectorPipe implements PipeTransform {

  transform(crew: Cast[]): string {
    let i = crew.findIndex( person => person.job == "Director" && person.department == "Directing" );
    return crew[i].name;
  }

}
