import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getToDos(): Observable<any> {
    return this.http.get('assets/mocks/todos.json');
  }
}
