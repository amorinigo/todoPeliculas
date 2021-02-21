import { Injectable }         from '@angular/core';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs';
import { SeriesHttpService }  from './series-http.service';
import { Serie, SeriesResponse }              from '@shared/interfaces/series-response.interface';
import { Film }               from '@shared/interfaces/search-response.interface';
import { ButtonService } from './button.service';

@Injectable({ providedIn: 'root' })
export class SeriesService {
  constructor( private seriesHttpSvc : SeriesHttpService,
               private router        : Router,
               private buttonSvc     : ButtonService ) {}
  
  public load120Series( series: Serie[], rating: string = 'nowPlaying' ): void {
    this.seriesHttpSvc.page = 1;
    for(let i = 1; i <= 6; i++) this.loadMoreSeries( series, rating );
    window.scrollTo(0, 600);
  }

  public loadMoreSeries( series: Serie[] | Film[], rating: string = 'nowPlaying' ): void {
    this.seriesHttpSvc.getResponseOf( rating ).subscribe( resp => {
      // console.log( this.seriesHttpSvc.page );
      // console.log( resp.total_pages );
      // console.log( rating );

      series.push( ... resp.results );

      (this.seriesHttpSvc.page >= resp.total_pages) ? 
        this.buttonSvc.quedanPages = false :
        this.buttonSvc.quedanPages = true;
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