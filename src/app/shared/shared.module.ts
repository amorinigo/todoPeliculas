import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { TitleComponent } from './components/title/title.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import { MovieComponent } from './components/movie/movie.component';
import { CastSliderComponent } from './components/cast-slider/cast-slider.component';
import { OriginalImagePipe } from './pipes/original-image.pipe';
import { PosterImagePipe } from './pipes/poster-image.pipe';
import { SeriesSliderComponent } from './components/series-slider/series-slider.component';
import { ContentSelectorComponent } from './components/content-selector/content-selector.component';
import { SecondarySeriesSliderComponent } from './components/secondary-series-slider/secondary-series-slider.component';

@NgModule({
  declarations: [
    TitleComponent,
    SpinnerComponent,
    MainSliderComponent,
    MoviesGridComponent,
    MovieComponent,
    CastSliderComponent,
    OriginalImagePipe,
    PosterImagePipe,
    SeriesSliderComponent,
    ContentSelectorComponent,
    SecondarySeriesSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainSliderComponent,
    PosterImagePipe,
    TitleComponent,
    SeriesSliderComponent,
    ContentSelectorComponent,
    MoviesGridComponent,
    SecondarySeriesSliderComponent
  ]
})
export class SharedModule { }
