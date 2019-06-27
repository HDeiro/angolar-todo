import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteService } from './services/route.service';

@NgModule({
  imports: [RouterModule.forRoot(RouteService.routeList)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
