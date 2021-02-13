import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService }      from '@shared/services/series.service';
import { Movie }              from '@shared/interfaces/movies-response.interface';
import { Serie }              from '@shared/interfaces/series-response.interface';
import { Subscription }       from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public series: Serie[] = [];

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.moviesService.queryWord = 'últimas';
    this.loadTheFirst60Movies();
    this.runSeriesQuery( this.moviesService.queryWord );
  }

  private loadTheFirst60Movies(): void {
    return this.moviesService.loadTheFirst60Movies( this.movies );
  }

  public runMoviesQuery( typeOfQuery: string ): Movie[] {
    this.movies = [];
    return this.moviesService.runMoviesQuery( typeOfQuery, this.movies );
  }

  public loadMoreMovies(): void {
    return this.moviesService.loadMoreMovies( this.movies );
  }

  public runSeriesQuery( typeOfQuery: string ): Subscription {
    return this.seriesService.getSeriesObservable( typeOfQuery ).subscribe(
      series => this.series = series.splice(0, 12)
    );
  }
}
