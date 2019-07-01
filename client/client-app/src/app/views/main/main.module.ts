import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatMenuModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponentModule } from 'src/app/components/profile/profile.component.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ProfileComponentModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    EnsureModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
