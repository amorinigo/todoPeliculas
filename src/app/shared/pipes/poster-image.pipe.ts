import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'posterImage' })
export class PosterImagePipe implements PipeTransform {

  transform( url: string ): string {
    if( url ) return `https://image.tmdb.org/t/p/w500${ url }`;
    return '../../../assets/images/no-image.jpg';
  }

}
