import { Component, Input } from '@angular/core';
import { MoviesService }    from 'app/movies/services/movies.service';
import { SeriesService }    from 'app/series/services/series.service';
import { Movie }            from 'app/movies/interfaces/movies-response.interface';
import { Serie }            from 'app/series/interfaces/series-response.interface';
import { Film }             from 'app/search/interfaces/search-response.interface';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent {
  @Input() films       : Film[];
  @Input() movies      : Movie[];
  @Input() series      : Serie[];

 constructor(  private moviesService: MoviesService,
               private seriesService: SeriesService ) {}

  public showDetails( film: Film ): void {
    (film.title) ? this.moviesService.showDetails(film.id) : this.seriesService.showDetails(film.id);
  }
}
