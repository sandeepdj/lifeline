import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { LoginComponent } from './modules/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';

const appRoutes : Routes =
  [
    { path: '', redirectTo: 'LifeLine', pathMatch: 'full' },
    { path: 'LifeLine', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'Dashbboard', component: DashboardComponent }
    ]
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
