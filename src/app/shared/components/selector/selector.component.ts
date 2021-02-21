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
  @Output() sendEvent = new EventEmitter<string>();
  @ViewChild( "menu" ) private menu: ElementRef;

  public  ratings       : string[];
  private currentRating : string;

  constructor() {
    this.ratings = ['nowPlaying', 'upcoming', 'topRated', 'popular'];
    this.currentRating = this.ratings[0];
  }

  ngAfterViewInit(): void {
    this.menu.nativeElement.firstElementChild.classList.add("active");
  }

  public showTitle(): string {
    if( this.isMovieTitle ) return 'Películas online'; else return 'Series online';
  }

  public activateItem( item: HTMLElement, rating: string ): void {
    this.disableCurrentItem();
    item.classList.add("active");
    this.emitCurrentRating( rating );
  }

  private disableCurrentItem(): void {
    const currentItem = Array.from( this.menu.nativeElement.children ).find(
      (element: HTMLElement) => element.classList.contains("active")
    );

    currentItem["classList"].remove("active");
  }

  private emitCurrentRating( rating: string ): void {
    if(rating == this.currentRating) return;
    this.currentRating = rating;
    this.sendEvent.emit( this.currentRating );
  }
}
