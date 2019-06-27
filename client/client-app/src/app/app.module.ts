import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './views/main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/api/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
