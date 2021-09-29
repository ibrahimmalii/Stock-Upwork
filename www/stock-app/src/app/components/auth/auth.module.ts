import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RedirectComponent } from './redirect/redirect.component';

const routes : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'authRedirect', component : RedirectComponent},
  {path : '', component : LoginComponent},
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RedirectComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
  ]
})
export class AuthModule { }
