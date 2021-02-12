import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour'
})
export class MinutesToHourPipe implements PipeTransform {

  transform( time: number ): string {
    if(!time) return;

    let hour = Math.floor( time / 60 );

    let minute = Math.floor( time % 60 );
    minute = Number( (minute < 10)? `0${ minute }` : minute );

    if( hour === 0 ) {
      return `${ minute }m`;
    } else {
      return `${ hour }h ${ minute }m`;
    }
  }

}
