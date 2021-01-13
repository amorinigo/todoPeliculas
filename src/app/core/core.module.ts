import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShadowComponent } from './components/shadow/shadow.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, ShadowComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
