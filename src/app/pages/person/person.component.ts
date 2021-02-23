import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MoviesHttpService } from '@shared/services/movies-http.service';
import { MoviesService }     from '@shared/services/movies.service';
import { Person }            from '@shared/interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  public person   : Person;
  public readMore : boolean;

  constructor( private activatedRoute : ActivatedRoute,
               private moviesService  : MoviesService,
               private moviesHttpSvc  : MoviesHttpService ) {
    this.moviesService.showMainSlider = false;
    this.readMore = false;
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.moviesHttpSvc.getPerson( id ).subscribe( person => this.person = person );
  }

}
