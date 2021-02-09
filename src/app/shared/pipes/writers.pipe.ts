import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '@shared/interfaces/credits-response.interface';

@Pipe({
  name: 'writers'
})
export class WritersPipe implements PipeTransform {

  transform(crew: Cast[]): Cast[] {
    return crew.filter( person => person.job == "Writer" && person.department == "Writing" )
               .splice(0, 3);
  }

}
