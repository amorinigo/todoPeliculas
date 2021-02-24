import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule }           from '@shared/shared.module';

import { BackButtonComponent }    from './components/back-button/back-button.component';
import { CastSliderComponent }    from './components/cast-slider/cast-slider.component';
import { FilmDetailsComponent }   from './components/film-details/film-details.component';
import { FilmsSliderComponent }   from './components/films-slider/films-slider.component';
import { MovieDetailsComponent }  from './components/movie-details/movie-details.component';
import { PersonComponent }        from './components/person/person.component';
import { SerieDetailsComponent }  from './components/serie-details/serie-details.component';

import { CreatorsPipe }           from './pipes/creators.pipe';
import { DirectorPipe }           from './pipes/director.pipe';
import { GenderPipe }             from './pipes/gender.pipe';
import { MinutesToHourPipe }      from './pipes/minutes-to-hour.pipe';
import { WritersPipe }            from './pipes/writers.pipe';
import { FilterCastPipe }         from './pipes/filter-cast.pipe';


@NgModule({
  declarations: [
    BackButtonComponent,
    CastSliderComponent,
    FilmDetailsComponent,
    FilmsSliderComponent,
    MovieDetailsComponent,
    PersonComponent,
    SerieDetailsComponent,

    CreatorsPipe,
    DirectorPipe,
    GenderPipe,
    MinutesToHourPipe,
    WritersPipe,
    FilterCastPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [

  ]
})
export class DetailsModule { }
