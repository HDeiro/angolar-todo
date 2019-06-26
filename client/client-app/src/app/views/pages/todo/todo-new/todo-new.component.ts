import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/api/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent implements OnInit {

  todoModel: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoModel = new Todo();
  }

  saveTodo() {
    this.todoModel.createdAt = new Date();
    this.todoService.saveTodo(this.todoModel);
  }
}
