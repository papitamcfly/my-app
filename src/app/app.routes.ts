import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpenCloseComponent } from './open-close/open-close.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'openClose', component: OpenCloseComponent, data: { animation: 'openClosePage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
];
