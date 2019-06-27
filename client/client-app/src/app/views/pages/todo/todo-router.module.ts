import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoNewComponent } from './todo-new/todo-new.component';

const routes: Routes = [
  { 
    path: '',
    component: TodoListComponent,
    data: {
      pageName: 'To dos',
      pageTitle: 'AnGolar | To Do'
    }
  },
  { 
    path: 'new',
    component: TodoNewComponent,
    data: {
      pageName: 'To dos',
      pageTitle: 'AnGolar | To Do | New'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TodoRouterModule { }
