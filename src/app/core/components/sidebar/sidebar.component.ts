import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/premieres-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  title: string = "Top estrenos"
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPremieres().subscribe(movies => { this.movies = movies.splice(0,5) });
  }

}
