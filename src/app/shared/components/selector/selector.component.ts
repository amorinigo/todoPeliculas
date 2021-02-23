import {
  Component, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements AfterViewInit {
  @Input()  isMovieTitle: boolean;
  @Output() sendEvent = new EventEmitter<string>();
  @ViewChild( "menu" ) private menu: ElementRef;
  private currentRating : string;

  constructor( public moviesService: MoviesService ) {
    this.currentRating = this.moviesService.ratings[0];
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
