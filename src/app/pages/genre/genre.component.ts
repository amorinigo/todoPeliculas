import { Component, OnDestroy, OnInit }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { MoviesService }      from '@shared/services/movies.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit, OnDestroy {
  public title: string;
  public movies: Movie[];
  public filterId: number;

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private movieReqService: MovieRequestsService ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.movies = [];
      this.title = params.genreType;
      this.filterId = Number( params.genreId );

      this.moviesService.queryWord = 'últimas';
      this.moviesService.loadMoviesWithFilter( params.genreId, this.movies );
      window.scrollTo(0, 600);
    });
  }

  ngOnDestroy() {
    this.filterId = null;
  }
}
