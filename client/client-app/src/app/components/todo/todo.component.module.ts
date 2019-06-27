import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { EnsureModule } from 'src/app/pipes/ensure/ensure.module';
import { MaxlengthModule } from 'src/app/pipes/maxlength/maxlength.module';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    EnsureModule,
    MaxlengthModule,
    MatInputModule,
    MatFormFieldModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoComponentModule { }
