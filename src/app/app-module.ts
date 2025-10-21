import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Rodape } from './rodape/rodape';
import { Lateral } from './lateral/lateral';
import { Home } from './home/home';
import { Produto } from './produto/produto';
import { NovProd } from './nov-prod/nov-prod';
import { Login } from './login/login';
import { ProdutoService } from './produto-service'; 
import { LoginService } from './login-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Rodape,
    Lateral,
    Home,
    Produto,
    NovProd,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    ProdutoService,
    LoginService,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
