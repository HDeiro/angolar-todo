import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    EnsureModule,
    MatMenuModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileComponentModule { }
