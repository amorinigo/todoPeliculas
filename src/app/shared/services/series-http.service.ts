import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { Params }                 from '@angular/router';
import { url, params }            from 'environments/environment.prod';
import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';
import { Serie, SeriesResponse }  from '@shared/interfaces/series-response.interface';
import { SerieDetails }           from '@shared/interfaces/serie-details.interface';
import { Credits }                from '@shared/interfaces/credits.interface';

@Injectable({ providedIn: 'root' })
export class SeriesHttpService {
  public  page: number = 1;
  private get params(): Params { return { ...params, page: String( this.page ) } }

  constructor( private http: HttpClient ) {}

  
  public getAiringToday(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${ url }/tv/airing_today`, { params: this.params });
  }


  public getOnTheAir(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${ url }/tv/on_the_air`, { params: this.params });
  }


  public getPopular(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${ url }/tv/popular`, { params: this.params });
  }


  public getTopRated(): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${ url }/tv/top_rated`, { params: this.params });
  }


  public getRecommended( id: number ): Observable<Serie[]>{
    this.page = 1;

    return this.http.get<SeriesResponse>(`${ url }/tv/${id}/recommendations`, {params: this.params})
               .pipe( map( resp => resp.results.filter( serie => serie.poster_path ) ) );
  }


  public getDetails( id: number ): Observable<SerieDetails> {
    window.scrollTo(0,0);
    return this.http.get<SerieDetails>(`${ url }/tv/${ id }`, { params: this.params });
  }


  public getCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ url }/tv/${ id }/credits`, { params: this.params });
  }


  public getResponseOf( rating: string, page?: number ): Observable<SeriesResponse> {
    if( page ) this.page = page;

    switch( rating ) {
      case 'nowPlaying' : return this.getAiringToday();
      case 'upcoming'   : return this.getOnTheAir();
      case 'topRated'   : return this.getTopRated();
      case 'popular'    : return this.getPopular();
    };
  }
}
