import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-subtitle',
  templateUrl: './dynamic-subtitle.component.html',
  styleUrls: ['./dynamic-subtitle.component.scss']
})
export class DynamicSubtitleComponent implements OnInit, AfterViewInit {
  public ratings: string[];
  private items = document.getElementsByClassName("dynamic__link");

  constructor() {
    this.ratings = ["Últimas", "Estrenos", "Ranking", "Más vistas"];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void { this.items[0].classList.add("active"); }

  activateItem( index: number ): void {
    const currentItem = Array.from(this.items).find(item => item.classList.contains("active"));
    currentItem.classList.remove("active");
    this.items[index].classList.add("active");
  }
}
