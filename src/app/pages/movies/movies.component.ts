import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor( private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {}
}
