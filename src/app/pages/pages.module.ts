import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SerieComponent } from './serie/serie.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GenreComponent } from './genre/genre.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SerieComponent,
    SearchComponent,
    MovieDetailsComponent,
    GenreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
