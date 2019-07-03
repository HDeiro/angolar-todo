import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home.component';
import { DashboardHomeRouterModule } from './dashboard-home.router.module';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmOverlays } from "agm-overlays"
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeRouterModule,
    EnsureModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx9XQlzWmkt9FwQdYSLxKZQrSZM30Zz1g'
    }),
    AgmJsMarkerClustererModule,
    AgmOverlays
  ],
  exports: [
    DashboardHomeComponent
  ],
  providers: [
  ]
})
export class DashboardHomeModule { }
