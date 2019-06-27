import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatInputModule, 
  MatMenuModule, 
  MatIconModule, 
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-new/todo-new.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MaxlengthModule } from 'src/app/pipes/maxlength/maxlength.module';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaxlengthModule,
    EnsureModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [
    TodoComponent,
    TodoListComponent,
    TodoNewComponent
  ]
})
export class TodoModule { }
