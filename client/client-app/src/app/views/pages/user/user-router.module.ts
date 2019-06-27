import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { 
    path: '',
    component: UserListComponent,
    data: {
      pageName: 'Users',
      pageTitle: 'AnGolar | Users'
    }
  },
  { 
    path: 'new',
    component: UserNewComponent,
    data: {
      pageName: 'Users',
      pageTitle: 'AnGolar | Users | New'
    }
  },
  { 
    path: 'edit/:id',
    component: UserNewComponent,
    data: {
      pageName: 'Users',
      pageTitle: 'AnGolar | Users | Edit'
    }
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRouterModule { }
