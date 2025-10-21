import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login-service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
  router: Router;
  servLogin: LoginService;
  login: string = "";
  senha: string = "";
  mensagem: string = "";

  constructor(router: Router, servLogin: LoginService) {
    this.router = router;
    this.servLogin = servLogin;
  }

  signin(): void{
    if(this.servLogin.signin(this.login,this.senha))
       this.router.navigateByUrl("/produto");
    else{
       this.mensagem = "Login ou senha inválido(s).";
       this.login = "";
       this.senha = "";
       this.router.navigateByUrl("/login");
    }
  }
  ngOnInit(): void {
  }
}
