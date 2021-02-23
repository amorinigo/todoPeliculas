import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesService }     from '@shared/services/movies.service';
import { SearchService }     from '@shared/services/search.service';
import { Film }              from '@shared/interfaces/search-response.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [ 'h6 { text-align: center; }' ]
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
