import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/api/todo.service';
import { FormErrorMatcher } from 'src/app/utilities/form-error-matcher.util';
import { FormControl, Validators } from '@angular/forms';
import { ObjectUtils } from 'src/app/utilities/object-utils.util';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input('model') model: Todo;
  editableModel: Todo;
  isFullscreenModeActivated: boolean = false;
  matcher = new FormErrorMatcher();
  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  toggleFullscreenMode() {
    this.editableModel = <Todo> ObjectUtils.clone(this.model);
    this.isFullscreenModeActivated = !this.isFullscreenModeActivated;
    
    if(!this.isFullscreenModeActivated)
      this.editableModel = null;
  }

  saveTodo() {
    this.todoService.saveTodo(this.editableModel);
  }
}
