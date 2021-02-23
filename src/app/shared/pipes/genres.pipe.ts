import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '@shared/interfaces/genres-response.interface';

@Pipe({ name: 'genres' })
export class GenresPipe implements PipeTransform {

  transform( genres: Genre[] ): string {
    if( !genres ) return;

    let filmGenres: string = "";
    genres.forEach( genre => filmGenres += `${ genre.name }, ` );

    return filmGenres.slice(0, -2);
  }

}
