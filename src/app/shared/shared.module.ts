import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';

import { SwiperModule }           from 'swiper/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { SpinnerComponent }       from './components/spinner/spinner.component';
import { CastSliderComponent }    from './components/cast-slider/cast-slider.component';
import { SeriesSlider1Component } from "./components/series-slider-1/series-slider-1.component";
import { SeriesSlider2Component } from "./components/series-slider-2/series-slider-2.component";
import { FilmDetailsComponent }   from './components/film-details/film-details.component';
import { BackButtonComponent }    from './components/back-button/back-button.component';
import { FilmComponent }          from './components/film/film.component';
import { FilmsGridComponent }     from './components/films-grid/films-grid.component';
import { SelectorComponent }      from './components/selector/selector.component';
import { FilmsSliderComponent }   from "./components/films-slider/films-slider.component";

import { MinutesToHourPipe }      from './pipes/minutes-to-hour.pipe';
import { GenderPipe }             from './pipes/gender.pipe';
import { OriginalImagePipe }      from './pipes/original-image.pipe';
import { PosterImagePipe }        from './pipes/poster-image.pipe';
import { GenresPipe }             from './pipes/genres.pipe';
import { DirectorPipe }           from './pipes/director.pipe';
import { WritersPipe }            from './pipes/writers.pipe';
import { CreatorsPipe }           from './pipes/creators.pipe';
import { RatingPipe }             from './pipes/rating.pipe';
import { ButtonTextPipe }         from './pipes/button-text.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    CastSliderComponent,
    SeriesSlider1Component,
    SeriesSlider2Component,
    SelectorComponent,
    FilmsSliderComponent,
    BackButtonComponent,
    FilmDetailsComponent,
    FilmsGridComponent,
    FilmComponent,

    MinutesToHourPipe,
    GenderPipe,
    OriginalImagePipe,
    PosterImagePipe,
    GenresPipe,
    DirectorPipe,
    WritersPipe,
    CreatorsPipe,
    RatingPipe,
    ButtonTextPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SwiperModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    NgCircleProgressModule,
    SwiperModule,

    SeriesSlider1Component,
    SeriesSlider2Component,
    SelectorComponent,
    SpinnerComponent,
    CastSliderComponent,
    FilmsSliderComponent,
    FilmDetailsComponent,
    BackButtonComponent,
    FilmComponent,
    FilmsGridComponent,

    GenderPipe,
    OriginalImagePipe,
    PosterImagePipe,
    MinutesToHourPipe,
    RatingPipe,
    ButtonTextPipe
  ]
})
export class SharedModule { }
