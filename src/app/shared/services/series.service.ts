import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params, Router }         from '@angular/router';

import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';

import { Serie, SeriesResponse }  from '@shared/interfaces/series-response.interface';
import { SerieDetails }           from '@shared/interfaces/serie-details.interface';
import { Credits }                from '@shared/interfaces/credits.interface';
import { Film } from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class SeriesService {

  private url: string = "https://api.themoviedb.org/3/tv";
  public page: number = 1;

  public queryWord: string = 'últimas';

  constructor( private http: HttpClient,
               private router: Router ) {}

  private get params(): Params {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: String( this.page )
    }
  }

  public getSeriesAiringToday(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/airing_today`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getSeriesOnTheAir(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/on_the_air`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getSeriesPopular(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/popular`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getSeriesTopRated(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}/top_rated`, { params: this.params })
               .pipe( map( response => response.results.filter( serie => serie.poster_path ) ) );
  }

  public getRecommendedSeries( id: number ): Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${this.url}/${id}/recommendations`, {params: this.params})
               .pipe( map( resp => resp.results.filter( serie => serie.poster_path ) ) );
  }

  public getSerieDetails( id: number ): Observable<SerieDetails> {
    return this.http.get<SerieDetails>(`${ this.url }/${ id }`, { params: this.params });
  }

  public getSerieCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ this.url }/${ id }/credits`, { params: this.params });
  }

  public getSeriesObservable( term: string ): Observable<Serie[]> {
    switch( term ) {
      case 'últimas'    :  return this.getSeriesAiringToday();
      case 'estrenos'   :  return this.getSeriesOnTheAir();
      case 'ranking'    :  return this.getSeriesTopRated();
      case 'más vistas' :  return this.getSeriesPopular();
    };
  }

  public showSerieDetails( id: number ): Promise<boolean> {
    return this.router.navigate( ['serie-detalles', id] );
  }

  public load120Series( series: Serie[] ): void {
    this.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreSeries( series );
  }

  public loadMoreSeries( series: Serie[] | Film[] ) {
    this.getSeriesObservable( this.queryWord ).subscribe( resp => series.push( ... resp ) );
    this.page++;
  }
}
