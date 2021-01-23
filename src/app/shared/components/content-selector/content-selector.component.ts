import {
  Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-content-selector',
  templateUrl: './content-selector.component.html',
  styleUrls: ['./content-selector.component.scss']
})
export class ContentSelectorComponent implements OnInit, AfterViewInit {
  @Input() isMovieTitle: boolean;
  @Output() typeOfQuery = new EventEmitter<string>();
  @ViewChild( "menu" ) menu: ElementRef;
  public ratings: string[];
  private currentRating: string;

  constructor() {
    this.ratings = ["Últimas", "Estrenos", "Ranking", "Más vistas"];
    this.currentRating = this.ratings[0].toLowerCase();
  }

  ngOnInit(): void {
    this.typeOfQuery.emit( this.currentRating );
  }

  ngAfterViewInit(): void { this.menu.nativeElement.firstElementChild.classList.add("active"); }

  showTitle(): string {
    if(this.isMovieTitle) return "Películas online";
    return "Series online";
  }

  disableCurrentItem(): void {
    const currentItem = Array.from( this.menu.nativeElement.children ).find(
      (element: HTMLElement) => element.classList.contains("active")
    );
    currentItem["classList"].remove("active");
  }

  activateItem( item: HTMLElement ): void { // CAMBIAR NOMBRE.
    this.disableCurrentItem();  // CAMBIAR NOMBRE.
    item.classList.add("active");  // VA EN LA FUNCIÓN DISABLECURRENTITEM;

    const word: string = item.innerText.toLowerCase().trim();  // TODO ESTO EN UNA FUNCIÓN.
    if(word == this.currentRating) return;
    this.currentRating = word;
    this.typeOfQuery.emit( this.currentRating );
  }
}
