import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeMockComponent } from './youtube-mock/youtube-mock.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideMenuExpandedComponent } from './side-menu-expanded/side-menu-expanded.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeMockComponent,
    HeaderComponent,
    SideMenuComponent,
    HomePageComponent,
    SideMenuExpandedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
