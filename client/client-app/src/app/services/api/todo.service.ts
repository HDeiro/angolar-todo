import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoAction } from 'src/app/models/todo-action.model';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getPreloadedTodoActions(todo: Todo) {
    return {
      'remove' :  new TodoAction({
         label: 'Remove',
         callback: () => this.removeToDo(todo)
      }),
      'privatize' :  new TodoAction({
          label: 'Make it private',
          callback: () => this.privatizingToDo(todo)
      })
    }
  }

  getToDos(): Observable<Array<Todo>> {
    return this.http.get<Array<any>>('assets/mocks/todos.json').pipe(
      map(items => items.map(item => {
        let todo = new Todo();
        todo.title = item.title;
        todo.content = item.content;
        todo.author = new User();
        todo.author.name = item.author.name;
        todo.createdAt = new Date(item.createdAt);
        item.actions && (todo.actions = item.actions.map(action => this.getPreloadedTodoActions(todo)[action]));
        return todo;
      }))
    );
  }

  removeToDo(todo: Todo) {
    console.log('Removing To Do', todo);
  }

  privatizingToDo(todo: Todo) {
    console.log('Privatizing To Do', todo); 
  }

  saveTodo(todo: Todo) {
    console.log('Save to do', todo);
  }
}
