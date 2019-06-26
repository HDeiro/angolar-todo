import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './views/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
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
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import { TodoListComponent } from './views/pages/todo/todo-list/todo-list.component';
import { RouteService } from './services/route.service';
import { TodoComponent } from './components/todo/todo.component';
import { EnsurePipe } from './pipes/ensure.pipe';
import { FormsModule } from '@angular/forms';
import { MaxlengthPipe } from './pipes/maxlength.pipe';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserListComponent } from './views/pages/user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Todo } from './models/todo.model';
import { TodoNewComponent } from './views/pages/todo/todo-new/todo-new.component';
import { ConfirmationDialogComponent } from './components/dialog/confirmation-dialog/confirmation-dialog.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { UserNewComponent } from './views/pages/user/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoListComponent,
    TodoComponent,
    EnsurePipe,
    MaxlengthPipe,
    UserListComponent,
    TodoNewComponent,
    ConfirmationDialogComponent,
    UserNewComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
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
    LottieAnimationViewModule.forRoot(),
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
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    Todo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
