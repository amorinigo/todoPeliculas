import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { MoviesService }      from '@shared/services/movies.service';
import { SearchService }      from '@shared/services/search.service';
import { Film }               from '@shared/interfaces/search-response.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  public films: Film[] = [];
  public query: string;
  public style: object;

  constructor( private moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute,
               private searchService  : SearchService ) {
    this.moviesService.showMainSlider = false;

    this.style = {
      'font-weight': 'bold',
      'margin-bottom.px': '50'
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.films = [];
      this.query = params.term;
      this.searchService.load5pagesOfFilms( this.films, params.term );
      window.scrollTo(0, 0);
    });
  }
}
