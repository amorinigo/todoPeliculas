import { Component, OnInit } from '@angular/core';
import { combineLatest }     from 'rxjs';
import { MoviesHttpService } from 'app/movies/services/movies-http.service';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Movie }             from 'app/movies/interfaces/movies-response.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public nowPlaying : Movie[];
  public populars   : Movie[];
  public upcoming   : Movie[];

  constructor( private moviesHttpSvc: MoviesHttpService,
               private moviesService: MoviesService ) {}

  ngOnInit(): void {

    combineLatest([
      this.moviesHttpSvc.getNowPlaying(),
      this.moviesHttpSvc.getUpcoming(),
      this.moviesHttpSvc.getPopular()
    ])
      .subscribe( ([ resp1 , resp2, resp3 ]) => {
        this.nowPlaying = this.moviesService.filterAndCut( resp1.results, 5, 5 );
        this.upcoming   = this.moviesService.filterAndCut( resp2.results, 5, 5 );
        this.populars   = this.moviesService.filterAndCut( resp3.results, 5, 5 );
      });
  }
}
