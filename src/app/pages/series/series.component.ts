import { Component, OnInit }  from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
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

  public runSeriesQuery( typeOfQuery: string ) {
    this.series = [];
    this.seriesService.queryWord = typeOfQuery;
    this.seriesService.load120Series( this.series );
  }
}
