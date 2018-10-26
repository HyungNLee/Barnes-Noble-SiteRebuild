import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderAdvertComponent } from './header-advert/header-advert.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderAdvertComponent,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
