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

  ngOnInit(): void {}

  runMoviesQuery( typeOfQuery: string ) {
    this.moviesService.getMoviesObservable( typeOfQuery ).subscribe( movies => {
      this.movies = movies;
      // console.log(this.movies);
    });
  }

  runSeriesQuery( typeOfQuery: string ) {
    this.seriesService.getSeriesObservable( typeOfQuery ).subscribe( series => {
      this.series = series.splice(0, 12);
      // console.log(this.series);
    });
  }
}
