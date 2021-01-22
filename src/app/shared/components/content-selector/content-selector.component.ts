import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { Serie } from '@shared/interfaces/series-response.interface';

@Component({
  selector: 'app-content-selector',
  templateUrl: './content-selector.component.html',
  styleUrls: ['./content-selector.component.scss']
})
export class ContentSelectorComponent implements OnInit {
  @Input() showInSlider: boolean;
  @Input() showMovies:   boolean;
  public   films: Movie[] | Serie[];

  constructor() { }

  ngOnInit(): void {
  }

  showTitle(): string {
    if(this.showMovies) return "Películas online";
    return "Series online"
  }
}
