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
}
