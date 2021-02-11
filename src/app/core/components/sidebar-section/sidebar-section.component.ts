import { Component, OnInit, Input } from '@angular/core';
import { MoviesService }            from '@shared/services/movies.service';
import { Movie }                    from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {
  @Input() title: string;
  @Input() movies: Movie[];

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void { }

  public showDetails( id: number ): Promise<boolean> {
    return this.moviesService.showMovieDetails( id );
  }
}
