import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { FormsModule } from '@angular/forms';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MatButtonModule, MatListModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserListComponent,
    UserNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LottieAnimationViewModule.forRoot(),
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    UserListComponent,
    UserNewComponent
  ]
})
export class UserModule { }
