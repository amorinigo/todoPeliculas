import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule }       from '@core/core.module';
import { SharedModule }     from '@shared/shared.module';
import { PagesModule }      from '@pages/pages.module';

import { AppComponent }     from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
