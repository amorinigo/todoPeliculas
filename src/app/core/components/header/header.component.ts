import { Component, OnInit } from '@angular/core';
import { MoviesHttpService } from '@shared/services/movies-http.service';
import { MoviesService }     from '@shared/services/movies.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public movies: Movie[];

  constructor( public  moviesService : MoviesService,
               private moviesHttpSvc : MoviesHttpService ) {}

  ngOnInit(): void {
    this.moviesHttpSvc.getNowPlaying().subscribe( resp => this.movies = resp.results.splice(0, 10) );
  }
}
