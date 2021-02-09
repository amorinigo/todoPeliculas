import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public title1:  string = "Top estrenos"
  public title2:  string = "Películas destacadas"
  public title3:  string = "Más películas"
  public premieres: Movie[] = []; // CREO UNA SOLA PROPIEDAD, HAGO UN PUSH Y LUEGO UN | SLICE.
  public populars:  Movie[] = []; // CREO UNA SOLA PROPIEDAD, HAGO UN PUSH Y LUEGO UN | SLICE.
  public topRated:  Movie[] = []; // CREO UNA SOLA PROPIEDAD, HAGO UN PUSH Y LUEGO UN | SLICE.

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe( premieres => {
      this.premieres = premieres.filter( movie => movie.poster_path ).splice(0, 5);
    });

    this.moviesService.getPopular().subscribe( populars => {
      this.populars = populars.filter( movie => movie.poster_path ).splice(5, 5);
    })

    this.moviesService.getTopRated().subscribe( topRated => {
      this.topRated = topRated.filter( movie => movie.poster_path ).splice(0, 5);
    })
  }

}
