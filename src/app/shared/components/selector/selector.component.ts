import {
  Component, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements AfterViewInit {
  @Input()  isMovieTitle: boolean;
  @Output() query = new EventEmitter<string>();
  @ViewChild( "menu" ) private menu: ElementRef;

  public  ratings       : string[];
  private currentRating : string;

  constructor() {
    this.ratings = ["Últimas", "Estrenos", "Ranking", "Más vistas"];
    this.currentRating = this.ratings[0].toLowerCase();
  }

  ngAfterViewInit(): void {
    this.menu.nativeElement.firstElementChild.classList.add("active");
  }

  public showTitle(): string {
    if( this.isMovieTitle ) return 'Películas online'; else return 'Series online';
  }

  public activateItem( item: HTMLElement ): void {
    this.disableCurrentItem();
    item.classList.add("active");
    this.emitCurrentRating( item );
  }

  private disableCurrentItem(): void {
    const currentItem = Array.from( this.menu.nativeElement.children ).find(
      (element: HTMLElement) => element.classList.contains("active")
    );

    currentItem["classList"].remove("active");
  }

  private emitCurrentRating( item: HTMLElement ): void {
    const word: string = item.innerText.toLowerCase().trim();

    if(word == this.currentRating) return;
    this.currentRating = word;
    this.query.emit( this.currentRating );
  }
}
