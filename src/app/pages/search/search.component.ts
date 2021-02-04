import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
  }

}
