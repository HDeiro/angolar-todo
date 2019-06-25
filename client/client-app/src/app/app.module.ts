import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './views/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
=======
import {
  MatToolbarModule,
  MatButtonModule, MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule
} from '@angular/material';
>>>>>>> 07cd00f91e44f0773251da3d8ee265a1e72e1f9e
import { TodoListComponent } from './views/pages/todo/todo-list/todo-list.component';
import { RouteService } from './services/route.service';
import { TodoComponent } from './components/todo/todo.component';
import { EnsurePipe } from './pipes/ensure.pipe';
import { FormsModule } from '@angular/forms';
import { MaxlengthPipe } from './pipes/maxlength.pipe';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserListComponent } from './views/pages/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoListComponent,
    TodoComponent,
    EnsurePipe,
    MaxlengthPipe,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouteService.listRoutes(),
    LayoutModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
