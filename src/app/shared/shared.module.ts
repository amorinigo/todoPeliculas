import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { HttpClientModule }        from '@angular/common/http';
import { RouterModule }            from '@angular/router';
import { SwiperModule }            from 'swiper/angular';

import { HeaderComponent }         from './components/header/header.component';
import { MainSliderComponent }     from './components/main-slider/main-slider.component';
import { NavbarComponent }         from './components/navbar/navbar.component';
import { SidebarComponent }        from './components/sidebar/sidebar.component';
import { SidebarSectionComponent } from './components/sidebar-section/sidebar-section.component';
import { SpinnerComponent }        from './components/spinner/spinner.component';

import { GenresPipe }              from './pipes/genres.pipe';
import { OriginalImagePipe }       from './pipes/original-image.pipe';
import { PosterImagePipe }         from './pipes/poster-image.pipe';
import { RatingPipe }              from './pipes/rating.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    MainSliderComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarSectionComponent,
    SpinnerComponent,

    GenresPipe,
    OriginalImagePipe,
    PosterImagePipe,
    RatingPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    HttpClientModule
  ],
  exports: [
    SwiperModule,
    HttpClientModule,

    HeaderComponent,
    SidebarComponent,
    SpinnerComponent,

    OriginalImagePipe,
    PosterImagePipe,
    GenresPipe,
    RatingPipe
  ]
})
export class SharedModule { }
