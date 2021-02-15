import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { MoviesService }      from '@shared/services/movies.service';
import { Movie }              from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  public title  : string;
  public movies : Movie[];
  public style  : object;

  constructor( private moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute ) {
    this.moviesService.showMainSlider = true;

    this.style = {
      'font-weight': 'bold',
      'margin-bottom.px': '50'
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.movies = [];
      this.title = params.rating;

      this.moviesService.queryWord = this.title.toLowerCase();
      this.moviesService.load120movies( this.movies );
      window.scrollTo(0, 600);
    });
  }
}
