import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import { NavbarComponent }          from './components/navbar/navbar.component';
import { FooterComponent }          from './components/footer/footer.component';
import { HeaderComponent }          from './components/header/header.component';
import { MainContentComponent }     from './components/main-content/main-content.component';
import { SidebarComponent }         from './components/sidebar/sidebar.component';
import { SidebarSectionComponent }  from './components/sidebar-section/sidebar-section.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    SidebarComponent,
    SidebarSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent
  ]

})
export class CoreModule { }
