import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent }          from './home/home.component';
import { MoviesComponent }        from './movies/movies.component';
import { SeriesComponent }        from './series/series.component';
import { SearchComponent }        from './search/search.component';
import { GenresComponent }        from './genres/genres.component';
import { PersonComponent }        from './person/person.component';
import { MovieDetailsComponent }  from './movie-details/movie-details.component';
import { SerieDetailsComponent }  from './serie-details/serie-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    SearchComponent,
    MovieDetailsComponent,
    GenresComponent,
    PersonComponent,
    SerieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
