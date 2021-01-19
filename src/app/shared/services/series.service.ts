import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie, SeriesResponse } from '@shared/interfaces/series-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url: string = "https://api.themoviedb.org/3/";
  private page: number = 1;
  private params = {
      api_key: "9b4d5ebc3b73e91f4e05a59de0179a5d",
      language: "es-ES",
      page: this.page.toString()
  }

  constructor(private http: HttpClient) { }

  getPopularSeries(): Observable<Serie[]> {
    return this.http.get<SeriesResponse>(`${this.url}tv/popular`, { params: this.params })
              .pipe( map( response => response.results ) );
  }
}
