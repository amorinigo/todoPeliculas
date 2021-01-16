import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '@shared/interfaces/genres-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  menuActivated:    boolean = false;
  public  gendersActivated: boolean = false;
  public  moviesActivated:  boolean = false;
  public  scrollActivated:  boolean = false;
  public  word: string;
  public  genres: Genre[];
  public  moviesRatings: string[];

  @HostListener("window: scroll")
  onScroll() {
    const top: number = document.documentElement.scrollTop
    if(top == 0) return this.scrollActivated = false;
    if(top > 40) return this.scrollActivated = true;
  }

  constructor( private router: Router,
               private moviesService: MoviesService ) {
    this.moviesRatings = ['Estrenos', 'Ranking', 'Más vistas', 'Películas'];
  }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe( genres => {
      this.genres = genres.sort( (genreA, genreB) => {
        if (genreA.name > genreB.name) return 1;
        if (genreA.name < genreB.name) return -1;
        return 0;
      });
    });
  }

  gendersOnOff(): boolean { return this.gendersActivated = !this.gendersActivated; }
  moviesOnOff():  boolean { return this.moviesActivated = !this.moviesActivated; }

  menuOnOff(): void {
    this.menuActivated    = !this.menuActivated;
    this.gendersActivated = false;
    this.moviesActivated  = false;
  }

  search(): void {
    if(!this.word) return;
    this.router.navigate(["búsqueda", this.word]);
    this.word = "";
    this.menuOnOff();
  }

  showGenre( genre: Genre ) {
    this.menuOnOff();
    this.router.navigate(["género", genre.name.toLowerCase()]);
    // LLAMO AL SERVICIO QUE MOSTRARÁ LAS PELÍCULAS DEL GÉNERO ESPECIFICADO. LA FUNCIÓN QUE SE CREE PARA ESTE PROPÓSITO, RECIBE POR PARÁMETRO EL GENRE.ID. EN BASE A ESE ID HACE LA PETICIÓN Y LUEGO UN RESPONSE.FILTER(), DONDE SE FILTRARÁN LAS PELÍCULAS CUYO GENRE.ID SEA IGUAL AL DEL PARÁMETRO GENRE.
    console.log(genre.id);
  }

  showMovies( rating: string ) {
    this.menuOnOff();
    this.router.navigate(["películas", rating.toLowerCase()]);
    // LLAMO AL SERVICIO QUE MUESTRA PELÍCULAS DE LA CLASIFICACIÓN ELEGIDA. LA FUNCIÓN DEL SERVICIO RECIBIRÁ POR PARÁMETRO EL RATING.TOLOWERCASE, PARA REALIZAR LA PETICIÓN EN BASE A ESE STRING.
    console.log( rating.toLowerCase() );
  }
}
