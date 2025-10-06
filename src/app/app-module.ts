import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Courses } from './courses/courses';
import { Plans } from './plans/plans';
import { Login } from './login/login';
import { SingUp } from './sing-up/sing-up';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    About,
    Profile,
    Courses,
    Plans,
    Login,
    SingUp,
    Home,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
