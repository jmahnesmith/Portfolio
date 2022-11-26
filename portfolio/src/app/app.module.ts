import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/container/portfolio/portfolio.component';
import { NavbarComponent } from './portfolio/component/navbar/navbar.component';
import { NameCardComponent } from './portfolio/component/name-card/name-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarComponent } from './portfolio/component/avatar/avatar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './portfolio/component/about-me/about-me.component';
import { SectionHeaderComponent } from './portfolio/component/section-header/section-header.component';
import { ButtonComponent } from './shared/button/button.component';


@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent, NavbarComponent, NameCardComponent, AvatarComponent, AboutMeComponent, SectionHeaderComponent, ButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
