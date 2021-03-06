import { Component, OnInit } from '@angular/core';
import { Subscription }      from 'rxjs';
import { SeriesHttpService } from 'app/series/services/series-http.service';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Serie }             from 'app/series/interfaces/series-response.interface';
import { Movie }             from 'app/movies/interfaces/movies-response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 'div { margin-top: 60px; }' ]
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public series: Serie[] = [];
  public rating: string;

  constructor( private moviesService: MoviesService,
               private seriesHttpSvc: SeriesHttpService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.moviesService.load60Movies( this.movies );
    this.getSeries();
    window.scrollTo(0, 0);
  }

  public getMovies( rating: string ): void {
    this.rating = rating;
    this.moviesService.load60Movies( this.movies = [], rating );
  }

  public getSeries( rating: string = 'nowPlaying' ): Subscription {
    return this.seriesHttpSvc.getResponseOf( rating, 1 ).subscribe(
      resp => this.series = resp.results.filter( serie => serie.backdrop_path ).splice(0, 12)
    );
  }

  public loadMovies() {
    this.moviesService.loadMoreMovies(this.movies, this.rating);
  }
}
