import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = 
[
  {
    path: 'login', //nome que vc colocou na hora de criar o componente
    component: LoginComponent//nome com letra maiuscula + component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
