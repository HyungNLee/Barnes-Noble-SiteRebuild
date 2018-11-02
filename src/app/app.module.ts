import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderAdvertComponent } from './header-advert/header-advert.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { FeaturedItemComponent } from './featured-item/featured-item.component';
import { ExclusiveBooksListComponent } from './exclusive-books-list/exclusive-books-list.component';
import { ExclusiveBookItemComponent } from './exclusive-book-item/exclusive-book-item.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderAdvertComponent,
    MainCarouselComponent,
    FeaturedListComponent,
    FeaturedItemComponent,
    ExclusiveBooksListComponent,
    ExclusiveBookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
