import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatIconModule, MatMenuModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterModule } from '@angular/router';
import { MaxlengthModule } from 'src/app/pipes/maxlength/maxlength.module';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MaxlengthModule,
    MatButtonModule,
    EnsureModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [
    TodoListComponent,
    TodoComponent
  ]
})
export class TodoListModule { }
