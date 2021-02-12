import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@shared/interfaces/movies-response.interface';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { MoviesService }      from '@shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public title: string;
  public movies: Movie[];

  constructor( private moviesService: MoviesService,
               private movieReqService: MovieRequestsService,
               private activatedRoute: ActivatedRoute ) {
    this.moviesService.showMainSlider = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.movies = [];
      this.title = params.rating;
      this.moviesService.queryWord = this.title.toLowerCase();
      this.moviesService.load120movies( this.movies );
      window.scrollTo(0, 500);
    });
  }

  public loadMoreMovies(): Movie[] {
    return this.moviesService.loadMoreMovies( this.movies );
  }
}
