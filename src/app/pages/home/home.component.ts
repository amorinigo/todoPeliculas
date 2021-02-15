import { Component, OnInit }  from '@angular/core';
import { MoviesService }      from '@shared/services/movies.service';
import { SeriesService }      from '@shared/services/series.service';
import { Movie }              from '@shared/interfaces/movies-response.interface';
import { Serie }              from '@shared/interfaces/series-response.interface';
import { Subscription }       from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 'app-selector { margin-top: 50px; }' ]
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
    this.getSeries( this.moviesService.queryWord );
  }

  private loadTheFirst60Movies(): void {
    return this.moviesService.loadTheFirst60Movies( this.movies );
  }

  public getMovies( query: string ): Movie[] {
    this.movies = [];
    return this.moviesService.runMoviesQuery( query, this.movies );
  }

  public loadMoreMovies(): void {
    return this.moviesService.loadMoreMovies( this.movies );
  }

  public getSeries( query: string ): Subscription {
    return this.seriesService.getSeriesObservable( query ).subscribe(
      series => this.series = series.splice(0, 12)
    );
  }
}
