import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewModule } from './user-new/user-new.module';
import { UserListModule } from './user-list/user-list.module';
import { UserRouterModule } from './user-router.module';

@NgModule({
  imports: [
    CommonModule,
    UserNewModule,
    UserListModule,
    UserRouterModule
  ]
})
export class UserModule { }
