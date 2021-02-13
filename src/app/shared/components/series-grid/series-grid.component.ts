import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-series-grid',
  templateUrl: './series-grid.component.html',
  styleUrls: ['./series-grid.component.scss']
})
export class SeriesGridComponent implements OnInit {
  @Input() series: Serie[];
  public thereAreSeries:  boolean;
  public lastLength:      number;

  constructor( private seriesService: SeriesService ) {
    this.thereAreSeries = true;
  }

  ngOnInit(): void {
  }

  public showSerieDetails( id: number ) {
    this.seriesService.showSerieDetails( id );
  }

  public loadMoreSeries(): void {
    this.seriesService.loadMoreSeries( this.series );
    this.disableButton();
  }

  private disableButton(): void {
    ( this.lastLength == this.series.length ) ?
      this.thereAreSeries = false :
      this.lastLength = this.series.length;
  }
}
