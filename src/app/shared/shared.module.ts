import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';
import { SwiperModule }           from 'swiper/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TitleComponent }                 from './components/title/title.component';
import { SpinnerComponent }               from './components/spinner/spinner.component';
import { MainSliderComponent }            from './components/main-slider/main-slider.component';
import { MoviesGridComponent }            from './components/movies-grid/movies-grid.component';
import { MovieComponent }                 from './components/movie/movie.component';
import { CastSliderComponent }            from './components/cast-slider/cast-slider.component';
import { SeriesSliderComponent }          from './components/series-slider/series-slider.component';
import { FilmDetailsComponent }           from './components/film-details/film-details.component';
import { BackButtonComponent }            from './components/back-button/back-button.component';
import { ContentSelectorComponent }       from './components/content-selector/content-selector.component';
import { RecommendedSliderComponent }     from './components/recommended-slider/recommended-slider.component';
import { SecondarySeriesSliderComponent } from './components/secondary-series-slider/secondary-series-slider.component';

import { MinutesToHourPipe }  from './pipes/minutes-to-hour.pipe';
import { GenderPipe }         from './pipes/gender.pipe';
import { OriginalImagePipe }  from './pipes/original-image.pipe';
import { PosterImagePipe }    from './pipes/poster-image.pipe';
import { GenresPipe }         from './pipes/genres.pipe';
import { DirectorPipe }       from './pipes/director.pipe';
import { WritersPipe }        from './pipes/writers.pipe';
import { CreatorsPipe }       from './pipes/creators.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    SpinnerComponent,
    MainSliderComponent,
    MoviesGridComponent,
    MovieComponent,
    CastSliderComponent,
    SeriesSliderComponent,
    ContentSelectorComponent,
    SecondarySeriesSliderComponent,
    RecommendedSliderComponent,
    FilmDetailsComponent,
    BackButtonComponent,

    MinutesToHourPipe,
    GenderPipe,
    OriginalImagePipe,
    PosterImagePipe,
    GenresPipe,
    DirectorPipe,
    WritersPipe,
    CreatorsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule,
    SwiperModule,

    MainSliderComponent,
    TitleComponent,
    SeriesSliderComponent,
    ContentSelectorComponent,
    MoviesGridComponent,
    SecondarySeriesSliderComponent,
    SpinnerComponent,
    CastSliderComponent,
    RecommendedSliderComponent,
    FilmDetailsComponent,
    BackButtonComponent,

    GenderPipe,
    OriginalImagePipe,
    PosterImagePipe,
    MinutesToHourPipe,
  ]
})
export class SharedModule { }
