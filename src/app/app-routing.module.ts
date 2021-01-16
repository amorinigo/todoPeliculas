import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreComponent } from '@pages/genre/genre.component';
import { HomeComponent } from '@pages/home/home.component';
import { MovieDetailsComponent } from '@pages/movie-details/movie-details.component';
import { MoviesComponent } from '@pages/movies/movies.component';
import { SearchComponent } from '@pages/search/search.component';
import { SerieComponent } from '@pages/serie/serie.component';

const routes: Routes = [
  {path: "inicio",                component: HomeComponent},
  {path: "serie",                 component: SerieComponent},
  {path: "búsqueda/:term",        component: SearchComponent},
  {path: "género/:genreType",     component: GenreComponent},
  {path: "películas/:rating",     component: MoviesComponent},
  {path: "película-detalles/:id", component: MovieDetailsComponent},
  {path: "**", pathMatch: "full", redirectTo: "inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
