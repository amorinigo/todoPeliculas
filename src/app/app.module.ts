import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DetailsModule }    from './details/details.module';
import { MoviesModule }     from './movies/movies.module';
import { FilmsModule }      from './films/films.module';
import { SearchModule }     from './search/search.module';
import { SeriesModule }     from './series/series.module';
import { SharedModule }     from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailsModule,
    MoviesModule,
    FilmsModule,
    SearchModule,
    SeriesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
