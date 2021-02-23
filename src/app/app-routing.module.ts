import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MovieDetailsComponent }  from './details/components/movie-details/movie-details.component';
import { PersonComponent }        from './details/components/person/person.component';
import { SerieDetailsComponent }  from './details/components/serie-details/serie-details.component';
import { GenresComponent }        from './movies/components/genres/genres.component';
import { HomeComponent }          from './movies/components/home/home.component';
import { MoviesComponent }        from './movies/components/movies/movies.component';
import { SearchComponent }        from './search/components/search/search.component';
import { SeriesComponent }        from './series/components/series/series.component';


const routes: Routes = [
  {path: "inicio",                      component: HomeComponent},
  {path: "series",                      component: SeriesComponent},
  {path: "búsqueda/:term",              component: SearchComponent},
  {path: "género/:genreType/:genreId",  component: GenresComponent},
  {path: "películas/:rating",           component: MoviesComponent},
  {path: "película-detalles/:id",       component: MovieDetailsComponent},
  {path: "serie-detalles/:id",          component: SerieDetailsComponent},
  {path: "persona/:id",                 component: PersonComponent},
  {path: "**", pathMatch: "full",       redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
