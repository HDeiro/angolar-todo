import { Injectable, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '../views/pages/todo/todo-list/todo-list.component';
import { UserListComponent } from '../views/pages/user/user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private static routeList = [
    {
      path: 'todo',
      component: TodoListComponent,
      data: {
        pageName: 'To dos',
        pageTitle: RouteService.separate("AnGolar", "To Do")
      }
    },
    {
      path: 'user',
      component: UserListComponent,
      data: {
        pageName: 'Users',
        pageTitle: RouteService.separate("AnGolar", "User")
      }
    },
  ];

  constructor() { }

  static listRoutes(): ModuleWithProviders {
    return RouterModule.forRoot(RouteService.routeList);
  }

  static separate(...items) {
    const separator = `   |   `;
    return items.join(`${separator}`);
  }

  static getRoutes() {
    return RouteService.routeList.map(route => {
      return {
        path: `/${route.path}`,
        label: route.data.pageName
      }
    });
  }
}
