import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  timeoutReference: any;
  userBecomeInactive: Subject<any> = new Subject();
  routes: Array<{label: string, path: string}> = [
    {label: 'To dos', path: '/todo'},
    {label: 'Users', path: '/user'},
  ];
  filter = '';
  pageTitle = 'AnGolar';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private router: Router,
    private authService: AuthService,
    private toaster: MatSnackBar
  ) {
    this.inactivityControlTimeout();
    this.userBecomeInactive.subscribe(() => {
      this.toaster.open("User logged out because of inactivity", null, {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.authService.doLogout();
    });
  }

  ngOnInit() {
    this.router.events.subscribe(() => 
      this.pageTitle = this.titleService.getTitle());
  }

  getFilteredRoutes() {
    return this.routes.filter(route => route.label.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0);
  }

  inactivityControlTimeout() {
    this.timeoutReference = setTimeout(() => this.userBecomeInactive.next(undefined), 3600000);
  }

  @HostListener('window:mousemove') inactivityControlTimeoutReset() {
    clearTimeout(this.timeoutReference);
    this.inactivityControlTimeout();
  }
}
