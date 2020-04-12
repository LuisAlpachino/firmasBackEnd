import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HomeSessionComponent } from './home-session/home-session.component';
import {NameCompletePipe} from "./home-session/name-complete.pipe";
import { UploadComponent } from './upload/upload.component';
import { ValidarDocumentsComponent } from './validar-documents/validar-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormComponent,
    LoginComponent,
    HomeSessionComponent,
    NameCompletePipe,
    UploadComponent,
    ValidarDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
