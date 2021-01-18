import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { TitleComponent } from './components/title/title.component';
import { DynamicSubtitleComponent } from './components/dynamic-subtitle/dynamic-subtitle.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import { MovieComponent } from './components/movie/movie.component';
import { CastSliderComponent } from './components/cast-slider/cast-slider.component';
import { OriginalImagePipe } from './pipes/original-image.pipe';




@NgModule({
  declarations: [
    TitleComponent,
    DynamicSubtitleComponent,
    SpinnerComponent,
    MainSliderComponent,
    MoviesGridComponent,
    MovieComponent,
    CastSliderComponent,
    OriginalImagePipe
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
    MainSliderComponent
  ]
})
export class SharedModule { }
