import { Component, OnInit, HostListener }  from '@angular/core';
import { Router }                           from '@angular/router';
import { MovieRequestsService }             from '@shared/services/movie-requests.service';
import { Genre }                            from '@shared/interfaces/genres-response.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  menuActivated:    boolean;
  public  gendersActivated: boolean;
  public  moviesActivated:  boolean;
  public  scrollActivated:  boolean;
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
               private movieReqService: MovieRequestsService ) {
    this.moviesRatings    = ['Estrenos', 'Ranking', 'Más vistas', 'Películas'];
    this.menuActivated    = false;
    this.gendersActivated = false;
    this.moviesActivated  = false;
    this.scrollActivated  = false;
  }

  ngOnInit(): void {
    this.movieReqService.getGenres().subscribe( genres => {
      this.genres = genres.sort( (genreA, genreB) => {
        if (genreA.name > genreB.name) return 1;
        if (genreA.name < genreB.name) return -1;
        return 0;
      });
    });
  }

  public gendersOnOff(): boolean { return this.gendersActivated = !this.gendersActivated; }
  public moviesOnOff():  boolean { return this.moviesActivated = !this.moviesActivated; }

  public menuOnOff(): void {
    this.menuActivated    = !this.menuActivated;
    this.gendersActivated = false;
    this.moviesActivated  = false;
  }

  public search(): void {
    if(!this.word) return;
    this.router.navigate(["búsqueda", this.word]);
    this.word = "";
    this.menuOnOff();
  }
}
