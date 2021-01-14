import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  menuActivated:    boolean = false;
  public  gendersActivated: boolean = false;
  public  moviesActivated:  boolean = false;
  public  word: string;

  constructor() { }

  ngOnInit(): void { }

  menuOnOff(): void {
    this.menuActivated = !this.menuActivated;
    this.gendersActivated = false;
    this.moviesActivated = false;
  }

  search() {
    if(!this.word) return;
    this.word = "";
    this.menuOnOff();
  }

  gendersOnOff(): boolean { return this.gendersActivated = !this.gendersActivated; }

  moviesOnOff(): boolean { return this.moviesActivated = !this.moviesActivated; }
}
