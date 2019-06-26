import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/api/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input('model') model: Todo;
  editableModel: Todo;
  isFullscreenModeActivated: boolean = false;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  toggleFullscreenMode() {
    this.editableModel = this.model;
    this.isFullscreenModeActivated = !this.isFullscreenModeActivated;
    
    if(!this.isFullscreenModeActivated)
      this.editableModel = null;
  }

  saveTodo() {
    this.todoService.saveTodo(this.editableModel);
  }
}
