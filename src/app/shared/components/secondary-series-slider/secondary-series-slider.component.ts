import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';

@Component({
  selector: 'app-secondary-series-slider',
  templateUrl: './secondary-series-slider.component.html',
  styleUrls: ['./secondary-series-slider.component.scss']
})
export class SecondarySeriesSliderComponent implements OnInit {
  @Input() series: Serie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.series);
  }

}
