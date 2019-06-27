import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNewModule } from './todo-new/todo-new.module';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  imports: [
    CommonModule,
    TodoNewModule,
    TodoListModule
  ]
})
export class TodoModule { }
