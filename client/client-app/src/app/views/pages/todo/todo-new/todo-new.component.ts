import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/api/todo.service';
import { FormErrorMatcher } from 'src/app/utilities/form-error-matcher.util';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent implements OnInit {

  todoModel: Todo;
  matcher = new FormErrorMatcher();
  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
