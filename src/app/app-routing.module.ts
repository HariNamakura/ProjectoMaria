import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './modules/aplication-pages/activities/activities.component';
import { HomeComponent } from './modules/aplication-pages/home/home.component';
import { AlertsComponent } from './modules/aplication-pages/alerts/alerts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ReportsUsersComponent} from './modules/aplication-pages/reports-users/reports-users.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './registros/components/login/login.component';
import { RegistroComponent } from './registros/components/registro/registro.component';
import { MonitorRegisterComponent } from './pages/monitor-register/monitor-register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HelpComponent } from './pages/help/help.component';



const routes: Routes = [

  { 
    path: '',
    component: LoginComponent, 
    pathMatch: "full" 
  },

  { 
    path: "login", 
    component: LoginComponent, 
    pathMatch: "full" 
  },
  { 
    path: "register", 
    component: RegistroComponent, 
    pathMatch: "full" 
  },
  {
    path: 'admin',
    component: NavbarComponent,
    loadChildren: () =>
      import('./modules/aplication-pages/aplication-pages.module').then(
        (m) => m.AplicationPagesModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
