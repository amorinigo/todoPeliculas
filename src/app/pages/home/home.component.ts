import { Component, OnInit } from '@angular/core';
import { MoviesService }     from '@shared/services/movies.service';
import { SeriesService }     from '@shared/services/series.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';
import { Serie }             from '@shared/interfaces/series-response.interface';
import { Subscription }      from 'rxjs';
import { SeriesHttpService } from '@shared/services/series-http.service';

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
               private seriesService: SeriesService,
               private seriesHttpSvc: SeriesHttpService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.load60Movies();
    this.getSeries();
    window.scrollTo(0, 0);
  }

  private load60Movies(): void {
    return this.moviesService.load60Movies( this.movies );
  }

  public getMovies( rating: string ): void {
    this.rating = rating;
    console.log( this.rating );
    this.moviesService.load60Movies( this.movies = [], rating );
  }

  public getSeries( rating: string = 'nowPlaying' ): Subscription {
    console.log( rating );
    return this.seriesHttpSvc.getResponseOf( rating, 1 ).subscribe(
      resp => this.series = resp.results.filter( serie => serie.backdrop_path ).splice(0, 12)
    );
  }
}
