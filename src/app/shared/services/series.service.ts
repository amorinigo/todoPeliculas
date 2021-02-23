import { Injectable }         from '@angular/core';
import { Router }             from '@angular/router';
import { SeriesHttpService }  from './series-http.service';
import { MoviesService }      from './movies.service';
import { Serie }              from '@shared/interfaces/series-response.interface';
import { Film }               from '@shared/interfaces/search-response.interface';

@Injectable({ providedIn: 'root' })
export class SeriesService {
  constructor( private seriesHttpSvc : SeriesHttpService,
               private router        : Router,
               private moviesSvc     : MoviesService ) {}
  
  public load120Series( series: Serie[], rating: string = 'nowPlaying' ): void {
    
    this.seriesHttpSvc.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreSeries( series, rating );
    window.scrollTo(0, 600);

  }

  public loadMoreSeries( series: Serie[] | Film[], rating: string = 'nowPlaying' ): void {

    this.seriesHttpSvc.getResponseOf( rating ).subscribe( resp => {
      series.push( ... resp.results.filter( serie => serie.poster_path ) );
      this.moviesSvc.inspectPages( this.seriesHttpSvc.page, resp.total_pages);
    });

    this.seriesHttpSvc.page++;

  }

  public goToSeries(): Promise<boolean> {
    return this.router.navigate( ['series'] );
  }

  public showDetails( id: number ): Promise<boolean> {
    return this.router.navigate( ['serie-detalles', id] );
  }
}