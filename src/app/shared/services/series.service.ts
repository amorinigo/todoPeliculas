import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params, Router }         from '@angular/router';

import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';

import { Serie, SeriesResponse }  from '@shared/interfaces/series-response.interface';
import { SerieDetails }           from '@shared/interfaces/serie-details.interface';
import { Credits }                from '@shared/interfaces/credits.interface';
import { Film }                   from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class SeriesService {

  private url: string = "https://api.themoviedb.org/3/tv";
  public page: number = 1;

  constructor( private http: HttpClient,
               private router: Router ) {}

  private get params(): Params {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: String( this.page )
    }
  }

  public getAiringToday(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/airing_today`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getOnTheAir(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/on_the_air`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getPopular(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/popular`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getTopRated(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/top_rated`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getRecommended( id: number ): Observable<Serie[]>{
    this.page = 1;

    return this.http.get<SeriesResponse>(`${this.url}/${id}/recommendations`, {params: this.params})
               .pipe( map( resp => resp.results.filter( serie => serie.poster_path ) ) );
  }

  public getDetails( id: number ): Observable<SerieDetails> {
    window.scrollTo(0,0);
    return this.http.get<SerieDetails>(`${ this.url }/${ id }`, { params: this.params });
  }

  public getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ this.url }/${ id }/credits`, { params: this.params });
  }

  public getSeries( rating: string, page?: number ): Observable<Serie[]> {
    if( page ) this.page = page;

    switch( rating ) {
      case 'últimas'    :  return this.getAiringToday();
      case 'estrenos'   :  return this.getOnTheAir();
      case 'ranking'    :  return this.getTopRated();
      case 'más vistas' :  return this.getPopular();
    };
  }








  public load120Series( series: Serie[], rating: string = 'últimas' ): void {
    this.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreSeries( series, rating );
    window.scrollTo(0, 600);
  }

  public loadMoreSeries( series: Serie[] | Film[], rating: string = 'últimas' ): void {
    this.getSeries( rating ).subscribe( resp => series.push( ... resp ) );
    this.page++;
  }







  public goToSeries(): Promise<boolean> {
    return this.router.navigate( ['series'] );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.router.navigate( ['serie-detalles', id] );
  }
}
