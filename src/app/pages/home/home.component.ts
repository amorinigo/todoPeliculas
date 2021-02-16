import { Component, OnInit } from '@angular/core';
import { MoviesService }     from '@shared/services/movies.service';
import { SeriesService }     from '@shared/services/series.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { Serie }             from '@shared/interfaces/series-response.interface';
import { Subscription }      from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 'div { margin-top: 60px; }' ]
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public series: Serie[] = [];

  constructor( private moviesService: MoviesService,
               private seriesService: SeriesService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.loadTheFirst60Movies();
    this.getSeries();
    window.scrollTo(0, 0);
  }

  private loadTheFirst60Movies(): void {
    return this.moviesService.loadTheFirst60Movies( this.movies );
  }

  public getMovies( query: string ): Movie[] {
    return this.moviesService.runMoviesQuery( this.movies = [], query );
  }

  public getSeries( query: string = 'últimas' ): Subscription {
    return this.seriesService.getSeries( query ).subscribe(
      series => {this.series = series.filter( serie => serie.backdrop_path ).splice(0, 12)}
    );
  }
}
