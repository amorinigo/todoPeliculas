import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '@shared/interfaces/series-response.interface';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  @Input() serie: Serie;

  constructor() { }

  ngOnInit(): void {
  }

}
