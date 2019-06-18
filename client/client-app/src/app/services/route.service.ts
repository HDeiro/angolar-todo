import { Injectable, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '../views/pages/todo/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  static listRoutes(): ModuleWithProviders {
      return RouterModule.forRoot([
      { path: 'todo', component: TodoListComponent },
    ]);
  }
}
