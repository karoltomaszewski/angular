import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LogowanieComponent} from "./logowanie/logowanie.component";

export const routes: Routes = [
  {
    path: '',
    component: LogowanieComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
