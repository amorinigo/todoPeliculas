import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService }      from '@shared/services/series.service';
import { Serie }              from '@shared/interfaces/series-response.interface';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  public series: Serie[] = [];

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.series = [];
    this.seriesService.queryWord = 'últimas';
    this.seriesService.load120Series( this.series );
    window.scrollTo(0, 600);
  }

  public getSeries( query: string ): void {
    this.series = [];
    this.seriesService.queryWord = query;
    this.seriesService.load120Series( this.series );
  }
}
