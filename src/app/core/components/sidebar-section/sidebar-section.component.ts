import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@shared/interfaces/movies-response.interface';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {
  @Input() public title: string;
  @Input() public movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void { }

}
