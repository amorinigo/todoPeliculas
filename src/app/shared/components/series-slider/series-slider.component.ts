import { Component, OnInit } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-series-slider',
  templateUrl: './series-slider.component.html',
  styleUrls: ['./series-slider.component.scss']
})
export class SeriesSliderComponent implements OnInit {
  public title: string = "Series populares";
  public series: Serie[];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getPopularSeries().subscribe( popularSeries => {
      this.series = popularSeries.splice(0, 10);
    });
  }

}
