import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor( private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {}
}
