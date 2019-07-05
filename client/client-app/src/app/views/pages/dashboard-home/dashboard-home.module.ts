import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home.component';
import { DashboardHomeRouterModule } from './dashboard-home.router.module';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmOverlays } from "agm-overlays"
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { ChartModule } from 'angular2-chartjs';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardHomeRouterModule,
    EnsureModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx9XQlzWmkt9FwQdYSLxKZQrSZM30Zz1g'
    }),
    AgmJsMarkerClustererModule,
    AgmOverlays,
    ChartModule,
    MatCheckboxModule
  ],
  exports: [
    DashboardHomeComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class DashboardHomeModule { }
