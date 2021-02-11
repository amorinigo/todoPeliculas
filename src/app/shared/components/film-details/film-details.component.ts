import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '@shared/interfaces/movie-details.interface';
import { SerieDetails } from '@shared/interfaces/serie-details.interface';
import { Credits }      from '@shared/interfaces/credits.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  @Input() movieDetails: MovieDetails;
  @Input() serieDetails: SerieDetails;
  @Input() credits:      Credits;

  constructor() {}

  ngOnInit(): void {}
}
