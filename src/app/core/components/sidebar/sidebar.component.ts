import { Component, OnInit } from '@angular/core';
import { MoviesHttpService } from '@shared/services/movies-http.service';
import { Movie }             from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public nowPlaying : Movie[];
  public populars   : Movie[];
  public upcoming   : Movie[];

  constructor( private moviesHttpSvc: MoviesHttpService ) {}

  ngOnInit(): void {
    this.moviesHttpSvc.getNowPlaying().subscribe(movies => this.nowPlaying = movies.splice(5, 5));
    this.moviesHttpSvc.getUpcoming().subscribe(movies => this.upcoming = movies.splice(5, 5));
    this.moviesHttpSvc.getPopular().subscribe(movies => this.populars = movies.splice(5, 5));
  }
}
