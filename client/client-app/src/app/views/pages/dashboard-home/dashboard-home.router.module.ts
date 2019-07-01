import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardHomeComponent,
    data: {
      pageName: 'Home',
      pageTitle: 'AnGolar | Home'
    }
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardHomeRouterModule { }
