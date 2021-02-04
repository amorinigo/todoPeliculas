import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public isValidPage: boolean = this.moviesService.isValidPage;
  public videos: Movie[] = [];  // Movie[] || Serie[].

  constructor( public moviesService: MoviesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.moviesService.getPremieres().subscribe( movies => { this.videos = movies.splice(0, 10) });
  }

  // isValidPage(): boolean {
  //   const route: string = this.router.url.slice(1, 50);

  //   if( route === "inicio" ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
