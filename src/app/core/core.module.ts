import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { NavbarComponent }          from './components/navbar/navbar.component';
import { HeaderComponent }          from './components/header/header.component';
import { SidebarComponent }         from './components/sidebar/sidebar.component';
import { SidebarSectionComponent }  from './components/sidebar-section/sidebar-section.component';
import { MainSliderComponent }      from './components/main-slider/main-slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    MainSliderComponent,
    SidebarComponent,
    SidebarSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
