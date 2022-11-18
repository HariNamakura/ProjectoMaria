import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from 'src/app/pages/help/help.component';
import { MonitorRegisterComponent } from 'src/app/pages/monitor-register/monitor-register.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BinnacleComponent } from './binnacle/binnacle.component';
import { HomeComponent } from './home/home.component';
import { ReportsUsersComponent } from './reports-users/reports-users.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'binnacle',
    component: BinnacleComponent,
  },

  {
    path: 'MonitorRegister',
    component: MonitorRegisterComponent,
  },

  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationPagesRoutingModule { }
