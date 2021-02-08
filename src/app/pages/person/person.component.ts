import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonResponse } from '@shared/interfaces/person-response.interface';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  public personDetails: PersonResponse;
  public readMore: boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.showMainSlider = false;

    this.activatedRoute.params.subscribe( params => {
      this.moviesService.getPersonDetails( params.id ).subscribe(
        personDetails => {
          this.personDetails = personDetails;
          console.log(this.personDetails);
        }
      );
    });
  }

}
