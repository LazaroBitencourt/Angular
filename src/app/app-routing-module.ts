import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Produto } from './produto/produto';
import { LoginService } from './login-service';
import { NovProd } from './nov-prod/nov-prod';
const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'login', component: Login},
  {path: 'produto',component: Produto,canActivate:[LoginService]},
  {path: 'novoprod',component: NovProd,canActivate:[LoginService] },
  {path:'',redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
