import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-selector',
  templateUrl: './content-selector.component.html',
  styleUrls: ['./content-selector.component.scss']
})
export class ContentSelectorComponent implements OnInit, AfterViewInit {
  @Input() isMovieTitle:   boolean;
  @ViewChild( "menu" ) menu: ElementRef;
  public ratings: string[];

  constructor() { this.ratings = ["Últimas", "Estrenos", "Ranking", "Más vistas"]; }

  ngOnInit(): void {}

  ngAfterViewInit(): void { this.menu.nativeElement.firstElementChild.classList.add("active"); }

  showTitle(): string {
    if(this.isMovieTitle) return "Películas online";
    return "Series online";
  }

  disableCurrentItem(): void {
    const currentItem = Array.from( this.menu.nativeElement.children )
            .find( (element: HTMLElement) => element.classList.contains("active") );

    currentItem["classList"].remove("active");
  }

  activateItem( item: HTMLElement ): void {
    this.disableCurrentItem();
    item.classList.add("active");
    console.log( item.innerText ); // Output
  }
}
