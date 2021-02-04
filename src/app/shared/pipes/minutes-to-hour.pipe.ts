import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour'
})
export class MinutesToHourPipe implements PipeTransform {

  transform( time: number ): string {
    let hour = Math.floor( time / 60 );

    let minute = Math.floor( time % 60 );
    minute = Number( (minute < 10)? `0${ minute }` : minute );

    return `${ hour }h ${ minute }m`;
  }

}
