import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { SharedModule }     from '@shared/shared.module';
import { FilmsModule }      from 'app/films/films.module';
import { SeriesModule }     from 'app/series/series.module';

import { GenresComponent }  from './components/genres/genres.component';
import { HomeComponent }    from './components/home/home.component';
import { MoviesComponent }  from './components/movies/movies.component';

import { TitlePipe }        from './pipes/title.pipe';


@NgModule({
  declarations: [
    GenresComponent,
    HomeComponent,
    MoviesComponent,
    TitlePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmsModule,
    SeriesModule
  ],
  exports: [

  ]
})
export class MoviesModule { }
