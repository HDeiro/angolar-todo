import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: 'todo',
    loadChildren : () => import('./views/pages/todo/todo.module').then(module => module.TodoModule)
  },
  {
    path: 'user',
    loadChildren : () => import('./views/pages/user/user.module').then(module => module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
