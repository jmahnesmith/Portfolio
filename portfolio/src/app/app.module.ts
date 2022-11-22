import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/container/portfolio/portfolio.component';
import { NavbarComponent } from './portfolio/component/navbar/navbar.component';
import { NameCardComponent } from './portfolio/component/name-card/name-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarComponent } from './portfolio/component/avatar/avatar.component';
import { HomeContactComponent } from './portfolio/component/home-contact/home-contact.component';

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent, NavbarComponent, NameCardComponent, AvatarComponent, HomeContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
