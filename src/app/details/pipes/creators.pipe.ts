import { Pipe, PipeTransform } from '@angular/core';
import { Cast }                from '../interfaces/credits.interface';

@Pipe({ name: 'creators' })
export class CreatorsPipe implements PipeTransform {

  transform( crew: Cast[] ): Cast[] {
    return crew.filter(
      person =>
        person.job == "Executive Producer" &&
        person.department == "Production" &&
        person.known_for_department == "Writing"
    ).splice(0, 3);
  }

}
