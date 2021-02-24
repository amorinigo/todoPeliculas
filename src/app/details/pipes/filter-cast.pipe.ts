import { Pipe, PipeTransform } from '@angular/core';
import { Cast }                from '@details/interfaces/credits.interface';

@Pipe({
  name: 'filterCast'
})
export class FilterCastPipe implements PipeTransform {

  transform(cast: Cast[]): Cast[] {
    return cast.filter( actor => actor.profile_path );
  }

}
