import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { Serie } from '@shared/interfaces/series-response.interface';
import { MoviesService } from '@shared/services/movies.service';
import { SeriesService } from '@shared/services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public series: Serie[] = [];

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {}

  ngOnInit(): void {
    // 60 movies in total after executing this command. The first 20 come from the event sent by the app-content-selector child.
    this.get40UpcomingMovies();
    // console.log( this.movies );
  }

  runMoviesQuery( typeOfQuery: string ) {
    this.moviesService.getMoviesObservable( typeOfQuery ).subscribe( movies => {
      this.movies.push( ...movies );
      // this.movies = movies;
      // console.log( this.movies );
    });
  }

  runSeriesQuery( typeOfQuery: string ) {
    this.seriesService.getSeriesObservable( typeOfQuery ).subscribe( series => {
      this.series = series.splice(0, 12);
      // console.log(this.series);
    });
  }

  get40UpcomingMovies() {
    for( let i = 0; i < 2; i++ ) {
      this.moviesService.getUpcoming().subscribe( movies => {
        this.movies.push( ...movies );
      });
    }
  }

  loadMoreMovies() {
    // HACE LA PETICIÓN A CADA GET SEGÚN EL VALOR DEL TYPE OF QUERY. TENGO QUE CREAR UNA PROPIEDAD PARA SABER EL TYPE OF QUERYS DE MOVIES ACTUAL. Y HACER LA PETICIÓN SEGÚN ESE PARÁMETRO. PERO TENGO QUE PONER EL TAP EN CADA GET DEL MOVIE SERVICES. Y TENGO QUE FIJARME QUE RETORNE BIEN LAS PÁGINAS Y NO RETORNE SIEMPRE LAS MISMAS PÁGINAS. FIJARME BIEN CON EL CONSOLE.LOG();
  }
}
