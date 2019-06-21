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
      {
        path: 'todo',
        component: TodoListComponent,
        data: {
          pageName: 'To do',
          pageTitle: RouteService.separate("AnGolar", "To Do")
        }
      },
    ]);
  }

  static separate(...items) {
    const separator = `&#9679;`;
    return items.join(`&nbsp;&nbsp;${separator}&nbsp;&nbsp;`);
  }
}
