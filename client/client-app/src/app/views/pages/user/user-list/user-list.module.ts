import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogModule } from 'src/app/components/dialog/confirmation-dialog/confirmation-dialog.component.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatIconModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmationDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTableModule,
    LottieAnimationViewModule.forRoot(),
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
