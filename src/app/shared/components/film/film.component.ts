import { Component, OnInit, Input } from '@angular/core';
import { Film } from '@shared/interfaces/search-response.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film: Film;

  constructor() {}

  ngOnInit(): void {}

}
