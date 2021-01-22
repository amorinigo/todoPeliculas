import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-subtitle',
  templateUrl: './dynamic-subtitle.component.html',
  styleUrls: ['./dynamic-subtitle.component.scss']
})
export class DynamicSubtitleComponent implements OnInit, AfterViewInit {
  @ViewChild( "menu" ) menu: ElementRef;
  public ratings: string[];

  constructor() { this.ratings = ["Últimas", "Estrenos", "Ranking", "Más vistas"]; }

  ngOnInit(): void {}

  ngAfterViewInit(): void { this.menu.nativeElement.firstElementChild.classList.add("active"); }

  activateItem( item: HTMLElement ): void {
    const currentItem = Array.from( this.menu.nativeElement.children )
            .find( (element: HTMLElement) => element.classList.contains("active") );

    currentItem["classList"].remove("active");
    item.classList.add("active");
  }
}
