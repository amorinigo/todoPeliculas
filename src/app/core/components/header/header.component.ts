import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isValidPage: boolean = true;
  public videos: Movie[] = [];  // Movie[] || Serie[].

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPremieres().subscribe( movies => { this.videos = movies.splice(0, 10) });
  }


}
