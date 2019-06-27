import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: 'todo',
    loadChildren: './views/pages/todo/todo.module#TodoModule'
  },
  {
    path: 'user',
    loadChildren: './views/pages/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
