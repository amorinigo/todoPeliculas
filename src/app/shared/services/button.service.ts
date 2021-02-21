import { Injectable }        from '@angular/core';
import { MoviesHttpService } from './movies-http.service';

@Injectable({ providedIn: 'root' })
export class ButtonService {
  public quedanPages: boolean;

  constructor( private moviesHttpSvc: MoviesHttpService ) {
    this.quedanPages = true;
  }

  // public seeMoviesPages( rating: string = 'nowPlaying' ) {
  //   this.moviesHttpSvc.getResponseOf( rating ).subscribe( resp => {
  //     (this.moviesHttpSvc.page >= resp.total_pages) ? 
  //       this.quedanPages = false : 
  //       this.quedanPages = true;
  //   })
  // }
}