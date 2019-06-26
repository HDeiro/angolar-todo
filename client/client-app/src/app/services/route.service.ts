import { Injectable, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '../views/pages/todo/todo-list/todo-list.component';
import { UserListComponent } from '../views/pages/user/user-list/user-list.component';
import { TodoNewComponent } from '../views/pages/todo/todo-new/todo-new.component';
import { UserNewComponent } from '../views/pages/user/user-new/user-new.component';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private static routeList = [
    {
      path: 'todo',
      component: TodoListComponent,
      showInMenu: true,
      data: {
        pageName: 'To dos',
        pageTitle: RouteService.separate("AnGolar", "To Do")
      }
    },
    {
      path: 'todo/new',
      component: TodoNewComponent,
      data: {
        pageName: 'New to do',
        pageTitle: RouteService.separate("AnGolar", "To Do", "New")
      }
    },
    {
      path: 'user',
      component: UserListComponent,
      showInMenu: true,
      data: {
        pageName: 'Users',
        pageTitle: RouteService.separate("AnGolar", "User")
      }
    },
    {
      path: 'user/new',
      component: UserNewComponent,
      data: {
        pageName: 'New user',
        pageTitle: RouteService.separate("AnGolar", "User", "New")
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

  static getMenuRoutes() {
    return RouteService.routeList
      .filter(route => route.showInMenu)
      .map(route => {
        return {
          path: `/${route.path}`,
          label: route.data.pageName
        }
      });
  }
}
