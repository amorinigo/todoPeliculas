import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor( private moviesService: MoviesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {}
}
