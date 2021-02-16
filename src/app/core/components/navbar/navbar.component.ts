import { Component, OnInit, HostListener }  from '@angular/core';
import { Router }                           from '@angular/router';
import { MoviesHttpService }                from '@shared/services/movies-http.service';
import { Genre }                            from '@shared/interfaces/genres-response.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  genres            : Genre[];
  public  menuActivated     : boolean;
  public  gendersActivated  : boolean;
  public  moviesActivated   : boolean;
  public  scrollActivated   : boolean;
  public  moviesRatings     : string[];

  @HostListener("window: scroll")
  onScroll() {
    const top: number = document.documentElement.scrollTop
    if(top == 0) return this.scrollActivated = false;
    if(top > 40) return this.scrollActivated = true;
  }

  constructor( private router        : Router,
               private moviesHttpSvc : MoviesHttpService ) {
    this.moviesRatings = ['Estrenos', 'Ranking', 'Más vistas', 'Películas'];
    this.menuActivated, this.gendersActivated, this.moviesActivated, this.scrollActivated = false;
  }

  ngOnInit(): void {
    this.moviesHttpSvc.getGenres().subscribe( genres => {
      this.genres = genres.sort( (genreA, genreB) => {
        if (genreA.name > genreB.name) return 1;
        if (genreA.name < genreB.name) return -1;
        return 0;
      });
    });
  }

  public gendersOnOff() : boolean { return this.gendersActivated = !this.gendersActivated; }
  public moviesOnOff()  : boolean { return this.moviesActivated  = !this.moviesActivated;  }

  public menuOnOff(): void {
    this.menuActivated    = !this.menuActivated;
    this.gendersActivated, this.moviesActivated = false;
  }

  public search( input ): void {
    if( !input.value ) return;

    this.router.navigate(["búsqueda", input.value]);
    // input.value = "";
    this.menuOnOff();
  }
}
