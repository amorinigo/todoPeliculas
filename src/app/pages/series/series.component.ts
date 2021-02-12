import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor( private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {}
}
