import { Component, OnInit }    from '@angular/core';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { MoviesService }        from '@shared/services/movies.service';
import { Movie }                from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public movies: Movie[];

  constructor( public moviesService: MoviesService,
               private movieReqService: MovieRequestsService ) { }

  ngOnInit(): void {
    this.movieReqService.getNowPlaying().subscribe( movies => this.movies = movies.splice(0, 10) );
  }
}
