import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { GenreComponent }         from '@pages/genre/genre.component';
import { HomeComponent }          from '@pages/home/home.component';
import { MovieDetailsComponent }  from '@pages/movie-details/movie-details.component';
import { MoviesComponent }        from '@pages/movies/movies.component';
import { PersonComponent }        from '@pages/person/person.component';
import { SearchComponent }        from '@pages/search/search.component';
import { SerieDetailsComponent }  from '@pages/serie-details/serie-details.component';
import { SeriesComponent }         from '@pages/series/series.component';

const routes: Routes = [
  {path: "inicio",                component: HomeComponent},
  {path: "series",                component: SeriesComponent},
  {path: "búsqueda/:term",        component: SearchComponent},
  {path: "género/:genreType",     component: GenreComponent},
  {path: "películas/:rating",     component: MoviesComponent},
  {path: "película-detalles/:id", component: MovieDetailsComponent},
  {path: "serie-detalles/:id",    component: SerieDetailsComponent },
  {path: "persona/:id",           component: PersonComponent},
  {path: "**", pathMatch: "full", redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
