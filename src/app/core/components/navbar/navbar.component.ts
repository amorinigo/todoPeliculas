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

  @HostListener("window: scroll")
  onScroll() {
    const top: number = document.documentElement.scrollTop
    if(top == 0) return this.scrollActivated = false;
    if(top > 40) return this.scrollActivated = true;
  }

  constructor( private router: Router,
               private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe( genres => {
      this.genres = genres.sort( (genreA, genreB) => {
        if (genreA.name > genreB.name) return 1;
        if (genreA.name < genreB.name) return -1;
        return 0;
      });
    });
  }

  menuOnOff(): void {
    this.menuActivated    = !this.menuActivated;
    this.gendersActivated = false;
    this.moviesActivated  = false;
  }

  search(): void {
    if(!this.word) return;
    this.router.navigate(["busqueda", this.word]);
    this.word = "";
    this.menuOnOff();
  }

  gendersOnOff(): boolean { return this.gendersActivated = !this.gendersActivated; }
  moviesOnOff():  boolean { return this.moviesActivated = !this.moviesActivated; }
}
