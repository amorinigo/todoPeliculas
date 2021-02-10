import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public titles: string[];
  public nowPlaying: Movie[];
  public populars:   Movie[];
  public upcoming:   Movie[];

  constructor(private moviesService: MoviesService) {
    this.titles = ['Top estrenos', 'Películas destacadas', 'Más películas'];
  }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe( movies => {
      this.nowPlaying = movies.filter( movie => movie.poster_path ).splice(5, 5);
    });

    this.moviesService.getUpcoming().subscribe( movies => {
      this.upcoming = movies.filter( movie => movie.poster_path ).splice(5, 5);
    })

    this.moviesService.getPopular().subscribe( movies => {
      this.populars = movies.filter( movie => movie.poster_path ).splice(5, 5);
    })
  }

}
