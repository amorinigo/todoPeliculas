import { Component, OnInit }  from '@angular/core';
import { SeriesService }      from 'app/series/services/series.service';
import { MoviesService }      from 'app/movies/services/movies.service';
import { Serie }              from 'app/series/interfaces/series-response.interface';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  public series: Serie[] = [];
  public rating: string;

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.seriesService.load120Series( this.series = [] );
  }

  public getSeries( rating: string ): void {
    this.rating = rating;
    this.seriesService.load120Series( this.series = [], rating );
  }

  public loadSeries(): void {
    this.seriesService.loadMoreSeries(this.series, this.rating);
  }
}
