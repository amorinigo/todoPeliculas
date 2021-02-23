import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { SharedModule }         from '@shared/shared.module';

import { FilmComponent }        from './components/film/film.component';
import { FilmsGridComponent }   from './components/films-grid/films-grid.component';
import { GridButtonComponent }  from './components/grid-button/grid-button.component';
import { SelectorComponent }    from './components/selector/selector.component';

import { ButtonTextPipe }       from './pipes/button-text.pipe';


@NgModule({
  declarations: [
    FilmComponent,
    FilmsGridComponent,
    GridButtonComponent,
    SelectorComponent,

    ButtonTextPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FilmsGridComponent,
    GridButtonComponent,
    SelectorComponent
  ]
})
export class FilmsModule { }
