import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes : Routes = [
  {
    path: '',
    loadChildren : () => import('./views/pages/dashboard-home/dashboard-home.module').then(module => module.DashboardHomeModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    loadChildren : () => import('./views/pages/todo/todo.module').then(module => module.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren : () => import('./views/pages/user/user.module').then(module => module.UserModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
