import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie, SeriesResponse } from '@shared/interfaces/series-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SerieDetails } from '@shared/interfaces/serie-details.interface';
import { Credits } from '@shared/interfaces/credits.interface';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url: string = "https://api.themoviedb.org/3/";
  public page: number = 1;
  get params() {
    return {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: this.page.toString()
    }
  }

  public firstSwiperOptions: SwiperOptions = {
    observer: true,
    freeMode: true,
    spaceBetween: 10,
    pagination: {
      el: '.first-series-swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      0:    { slidesPerView: 1 },
      350:  { slidesPerView: 2 },
      550:  { slidesPerView: 3 },
      1100: { slidesPerView: 4 }
    }
  };

  public secondSwiperOptions: SwiperOptions = {
    observer: true,
      freeMode: true,
      spaceBetween: 10,
      pagination: {
        el: '.second-series-swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0:    { slidesPerView: 1 },
        350:  { slidesPerView: 2 },
        550:  { slidesPerView: 3 },
        769:  { slidesPerView: 2 },
        845:  { slidesPerView: 3 },
        1100: { slidesPerView: 4 }
      }
  };

  constructor( private http: HttpClient,
               private router: Router ) {}

  getSeriesAiringToday(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}tv/airing_today`, { params: this.params })
              .pipe( map( response => response.results ) );
  }
  getSeriesOnTheAir(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}tv/on_the_air`, { params: this.params })
              .pipe( map( response => response.results ) );
  }
  getSeriesPopular(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}tv/popular`, { params: this.params })
              .pipe( map( response => response.results ) );
  }

  getSeriesTopRated(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}tv/top_rated`, { params: this.params })
              .pipe( map( response => response.results ) );
  }

  getSeriesObservable( term: string ): Observable<Serie[]> {
    switch( term ) {
      case 'últimas'    :  return this.getSeriesAiringToday();
      case 'estrenos'   :  return this.getSeriesOnTheAir();
      case 'ranking'    :  return this.getSeriesTopRated();
      case 'más vistas' :  return this.getSeriesPopular();
    };
  }

  showSerieDetails( id: number ) {
    this.router.navigate( ['serie-detalles', id] );
    window.scrollTo(0, 0);
  }

  getSerieDetails( id: number ): Observable<SerieDetails> {
    return this.http.get<SerieDetails>(`${ this.url }tv/${ id }`, { params: this.params });
  }

  getSerieCredits( id: number ): Observable<Credits> {
    return this.http.get<Credits>(`${ this.url }tv/${ id }/credits`, { params: this.params })
  }

  getRecommendedSeries( id: number ): Observable<Serie[]>{
    return this.http.get<SeriesResponse>(`${ this.url }tv/${ id }/recommendations`, {
      params: this.params
    }).pipe( map( resp => resp.results ) );
  }
}
