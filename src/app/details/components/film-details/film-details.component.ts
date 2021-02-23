import { Component, Input } from '@angular/core';
import { MovieDetails }     from 'app/details/interfaces/movie-details.interface';
import { SerieDetails }     from 'app/details/interfaces/serie-details.interface';
import { Credits }          from 'app/details/interfaces/credits.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent {
  @Input() movieDetails : MovieDetails;
  @Input() serieDetails : SerieDetails;
  @Input() credits      : Credits;


  public thereIsADirector(): boolean {
    const directorIndex: number = this.credits.crew.findIndex(
      person => person.job == "Director" && person.department == "Directing"
    );

    return directorIndex > -1;
  }
}
