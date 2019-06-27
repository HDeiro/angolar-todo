import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { TodoModule } from '../pages/todo/todo.module';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModule } from '../pages/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    TodoModule,
    UserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
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
