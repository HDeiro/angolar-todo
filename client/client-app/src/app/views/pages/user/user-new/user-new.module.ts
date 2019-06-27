import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewComponent } from './user-new.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    UserNewComponent
  ]
})
export class UserNewModule { }
