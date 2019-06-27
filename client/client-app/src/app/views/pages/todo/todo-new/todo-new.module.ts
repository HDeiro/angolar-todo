import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNewComponent } from './todo-new.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TodoNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [
    TodoNewComponent
  ]
})
export class TodoNewModule { }
