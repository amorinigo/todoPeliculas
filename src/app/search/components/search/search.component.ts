import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { SearchService }     from 'app/search/services/search.service';
import { MoviesService }     from 'app/movies/services/movies.service';
import { Film }              from 'app/search/interfaces/search-response.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [ 'h6 { text-align: center; min-height: 200px; margin-top: 120px; }' ]
})
export class SearchComponent implements OnInit {
  public films: Film[] = [];
  public query: string;


  constructor( public  moviesService  : MoviesService,
               private activatedRoute : ActivatedRoute,
               public  searchService  : SearchService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.query = params.term;
      this.searchService.load5pagesOfFilms( this.films = [], this.query );
    });
  }

  loadSearches() {
    this.searchService.loadMoreFilms(this.films, this.query);
  }
}
