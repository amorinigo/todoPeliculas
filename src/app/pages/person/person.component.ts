import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { MovieRequestsService } from '@shared/services/movie-requests.service';
import { MoviesService }        from '@shared/services/movies.service';
import { Person }               from '@shared/interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  public person:   Person;
  public readMore: boolean = false;

  constructor( private activatedRoute:  ActivatedRoute,
               private moviesService:   MoviesService,
               private movieReqService: MovieRequestsService ) {
    this.moviesService.showMainSlider = false;
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.movieReqService.getPerson( id ).subscribe( person => {
      this.person = person;
      window.scrollTo(0, 0);
    });
  }

}
