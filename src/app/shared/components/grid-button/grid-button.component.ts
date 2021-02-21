import { Component, OnInit }      from '@angular/core';
import { ButtonService }  from '@shared/services/button.service';

@Component({
  selector: 'app-grid-button',
  templateUrl: './grid-button.component.html',
  styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent implements OnInit {
  constructor( public buttonSvc: ButtonService ) {}

  ngOnInit() {
    // console.log('HOLA SOY EL BOTÓN');
  }
}
