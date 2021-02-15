import { Component, OnInit }    from '@angular/core';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { Movie }                from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public titles     : string[];
  public nowPlaying : Movie[];
  public populars   : Movie[];
  public upcoming   : Movie[];

  constructor( private movieReqService: MovieRequestsService ) {
    this.titles = ['Top estrenos', 'Películas destacadas', 'Más películas'];
  }

  ngOnInit(): void {
    this.movieReqService.getNowPlaying().subscribe(movies => this.nowPlaying = movies.splice(5, 5));
    this.movieReqService.getUpcoming().subscribe(movies => this.upcoming = movies.splice(5, 5));
    this.movieReqService.getPopular().subscribe(movies => this.populars = movies.splice(5, 5));
  }

}
