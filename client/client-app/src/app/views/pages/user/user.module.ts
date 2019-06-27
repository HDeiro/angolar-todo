import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewModule } from './user-new/user-new.module';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  imports: [
    CommonModule,
    UserNewModule,
    UserListModule,
  ]
})
export class UserModule { }
