import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produtoClass } from '../produto';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-nov-prod',
  standalone: false,
  templateUrl: './nov-prod.html',
  styleUrl: './nov-prod.css'
})
export class NovProd implements OnInit{
router: Router;
  servProd: ProdutoService;
  produto: produtoClass = new produtoClass();

  constructor(router: Router, servProd: ProdutoService) {
     this.router = router;
     this.servProd = servProd;
  }

  incluir():void{
     this.servProd.adicionar(this.produto);
     this.router.navigateByUrl("/produto")
  }
  ngOnInit(): void {
  }
}
