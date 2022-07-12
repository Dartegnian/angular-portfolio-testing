import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavListenerComponent } from './components/nav-listener/nav-listener.component';
import { AboutMeHobbiesSkillsComponent } from './components/about-me-hobbies-skills/about-me-hobbies-skills.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListenerComponent,
    AboutMeHobbiesSkillsComponent,
    HelloWorldComponent,
    HomeComponent,
    ContactMeComponent,
    AboutMeComponent,
    HeroBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
