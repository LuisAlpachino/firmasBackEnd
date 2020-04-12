import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {LoginComponent} from './login/login.component';
import {HomeSessionComponent} from './home-session/home-session.component';
import {UploadComponent} from './upload/upload.component';
import {ValidarDocumentsComponent} from './validar-documents/validar-documents.component';


const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: FormComponent},
  {path: 'home', component: HomeSessionComponent},
  {path: 'upload', component:ValidarDocumentsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
