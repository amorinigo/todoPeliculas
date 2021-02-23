import { Pipe, PipeTransform } from '@angular/core';
import { Cast }                from '../interfaces/credits.interface';

@Pipe({ name: 'writers' })
export class WritersPipe implements PipeTransform {

  transform(crew: Cast[]): Cast[] {
    if( !crew ) return [];

    return crew.filter( person => person.job == "Writer" && person.department == "Writing" )
               .splice(0, 3);
  }

}
