import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home.component';
import { DashboardHomeRouterModule } from './dashboard-home.router.module';

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeRouterModule
  ],
  exports: [
    DashboardHomeComponent
  ]
})
export class DashboardHomeModule { }
