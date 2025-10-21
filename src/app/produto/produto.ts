import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto-service';
import { produtoClass } from '../produto';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto implements OnInit{
  router: Router;
  servProd: ProdutoService;
  produtos: Array<produtoClass> = [];

  constructor(router: Router, servProd: ProdutoService) {
      this.router = router;
      this.servProd = servProd;
  }
  incluir():void{ this.router.navigateByUrl("/novoprod"); }
  excluir(codigo: string):void{
    this.servProd.remover(codigo);
    this.router.navigateByUrl("/produto");
  }
  ngOnInit(): void { this.produtos = this.servProd.obterTodos(); }
}
