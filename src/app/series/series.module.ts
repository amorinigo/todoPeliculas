import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { SharedModule }           from '@shared/shared.module';
import { FilmsModule }            from 'app/films/films.module';

import { SeriesComponent }        from './components/series/series.component';
import { SeriesSlider1Component } from './components/series-slider-1/series-slider-1.component';
import { SeriesSlider2Component } from './components/series-slider-2/series-slider-2.component';


@NgModule({
  declarations: [
    SeriesComponent,
    SeriesSlider1Component,
    SeriesSlider2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmsModule
  ],
  exports: [
    SeriesSlider1Component,
    SeriesSlider2Component
  ]
})
export class SeriesModule { }
