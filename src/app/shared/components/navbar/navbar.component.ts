import { Component, OnInit, HostListener, ViewChild, ElementRef }  from '@angular/core';
import { Router }            from '@angular/router';
import { MoviesHttpService } from 'app/movies/services/movies-http.service';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Genre }             from 'app/movies/interfaces/genres-response.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  genres              : Genre[];
  public  menuActivated       : boolean;
  public  gendersActivated    : boolean;
  public  moviesActivated     : boolean;
  public  scrollActivated     : boolean;
  @ViewChild( 'input' ) input : ElementRef<HTMLInputElement>;

  @HostListener("window: scroll")
  onScroll() {
    const top: number = document.documentElement.scrollTop
    if(top == 0) return this.scrollActivated = false;
    if(top > 40) return this.scrollActivated = true;
  }

  constructor( private router        : Router,
               private moviesHttpSvc : MoviesHttpService,
               public  moviesService : MoviesService ) {
    this.menuActivated    = false; 
    this.gendersActivated = false;
    this.moviesActivated  = false;
    this.scrollActivated  = false;
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
    this.gendersActivated = false;
    this.moviesActivated  = false;
  }

  public search(): void {
    if( !this.input.nativeElement.value ) return;
    console.log( this.input.nativeElement );
    this.router.navigate(["búsqueda", this.input.nativeElement.value]);
    this.menuOnOff();
    this.input.nativeElement.value = '';
  }
}
