import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public films: Movie[];

  constructor( public moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe(
      movies => this.films = movies.filter( movie => movie.poster_path ).splice(0, 10)
    );
  }
}
