import { Component, Input, OnInit }   from '@angular/core';
import { MoviesService }              from '@shared/services/movies.service';
import { SeriesService }              from '@shared/services/series.service';
import { Film }                       from '@shared/interfaces/search-response.interface';
import { Serie }                      from '@shared/interfaces/series-response.interface';
import { Movie }                      from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-films-grid',
  templateUrl: './films-grid.component.html',
  styleUrls: ['./films-grid.component.scss']
})
export class FilmsGridComponent implements OnInit {
  @Input() films       : Film[];
  @Input() movies      : Movie[];
  @Input() series      : Serie[];

 constructor(  private moviesService: MoviesService,
               private seriesService: SeriesService ) {}

  public showDetails( film: Film ): void {
    (film.title) ? this.moviesService.showDetails(film.id) : this.seriesService.showDetails(film.id);
  }

  ngOnInit() {}
}
