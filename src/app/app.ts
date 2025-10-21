import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrimeiroApp');
  router: Router;
  servLogin: LoginService;
  constructor(router: Router, servLogin: LoginService){
    this.router = router;
    this.servLogin = servLogin;
  }
  signout(): void{
    this.servLogin.signout();
    this.router.navigateByUrl("/home");
  }
}
