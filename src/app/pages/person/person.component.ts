import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@shared/interfaces/person.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  public person: Person;
  public readMore: boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.showMainSlider = false;

    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getPerson( id ).subscribe( person => this.person = person );
  }

}
