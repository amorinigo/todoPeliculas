import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { SerieComponent } from './serie/serie.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [HomeComponent, CategoryComponent, MoviesComponent, SerieComponent, SearchComponent, MovieDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
