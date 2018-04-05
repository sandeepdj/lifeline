import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';


@NgModule({
  declarations: [
     AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
