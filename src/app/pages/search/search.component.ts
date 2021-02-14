import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Film } from '@shared/interfaces/search-response.interface';
import { MoviesService }      from '@shared/services/movies.service';
import { SearchService }      from '@shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public films: Film[] = [];
  public query: string;
  // public isEmpty: boolean;

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private searchService: SearchService ) {
    this.moviesService.showMainSlider = false;
    // this.isEmpty = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.films = [];
      this.query = params.term;
      this.searchService.load5pagesOfFilms( this.films, params.term );
      // ( this.films.length === 0 ) ? this.isEmpty = true : this.isEmpty = false;
      window.scrollTo(0, 0);
    });
  }
}
