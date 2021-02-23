import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'originalImage' })
export class OriginalImagePipe implements PipeTransform {

  transform( url: string ): string {
    if( url ) return `https://image.tmdb.org/t/p/original${ url }`;
    return '../../../assets/images/no-image.jpg';
  }

}
