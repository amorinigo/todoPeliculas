import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  menuActivated:    boolean = false;
  public  gendersActivated: boolean = false;
  public  moviesActivated:  boolean = false;
  public  scrollActivated:  boolean = false;
  public  word: string;

  @HostListener("window: scroll")
  onScroll() {
    const top: number = document.documentElement.scrollTop
    if(top == 0) return this.scrollActivated = false;
    if(top > 40) return this.scrollActivated = true;
  }

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
