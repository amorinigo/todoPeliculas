import { Component, OnDestroy, OnInit }   from '@angular/core';
import { ActivatedRoute }                 from '@angular/router';
import { Movie }                          from '@shared/interfaces/movies-response.interface';
import { MoviesService }                  from '@shared/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styles: []
})
export class GenresComponent implements OnInit, OnDestroy {
  public title    : string;
  public movies   : Movie[];
  public genreId  : number;
  public style    : object;

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute ) {
    this.moviesService.showMainSlider = true;

    this.style = {
      'font-weight': 'bold',
      'margin-bottom.px': '50',
      'text-transform': 'capitalize'
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.movies   = [];
      this.title    = params.genreType;
      this.genreId  = Number( params.genreId );

      this.moviesService.queryWord = 'últimas';
      this.moviesService.loadMoviesWithFilter( this.genreId, this.movies );
      window.scrollTo(0, 600);
    });
  }

  ngOnDestroy(): void { this.genreId = null; }
}
