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
  private queryWord = "últimas";

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {}

  ngOnInit(): void { this.loadTheFirst60Movies(); }

  runMoviesQuery( typeOfQuery: string ) {
    this.queryWord = typeOfQuery;
    this.movies = [];
    this.loadTheFirst60Movies();
  }

  loadTheFirst60Movies() {
    this.moviesService.page = 1;
    for(let i = 1; i <= 3; i++) this.loadMoreMovies();
  }

  loadMoreMovies() {
    this.moviesService.getMoviesObservable( this.queryWord ).subscribe(
      movies => this.movies.push( ...movies )
    );
    this.moviesService.page++;
  }

  runSeriesQuery( typeOfQuery: string ) {
    this.seriesService.getSeriesObservable( typeOfQuery ).subscribe(
      series => this.series = series.splice(0, 12)
    );
  }
}
