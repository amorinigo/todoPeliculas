import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { SharedModule }     from '@shared/shared.module';
import { FilmsModule }      from 'app/films/films.module';
import { SearchComponent }  from './components/search/search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmsModule
  ],
  exports: [

  ]
})
export class SearchModule { }
