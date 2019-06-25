import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  routes: Array<{label: string, path: string}>;
  filter = '';
  pageTitle = 'AnGolar';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => this.pageTitle = this.titleService.getTitle());
    this.routes = RouteService.getMenuRoutes();
  }

  getFilteredRoutes() {
    return this.routes.filter(route => route.label.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0);
  }
}
