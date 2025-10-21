import { Injectable } from '@angular/core';
import { produtoClass } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Array<produtoClass>

   constructor() { this.produtos = new Array<produtoClass>(); }

   private getPos(codigo: string): number{
      for(let i=0; i<this.produtos.length; i++)
         if(codigo==this.produtos[i].codigo)
            return i;
      return -1;
   }

   adicionar(produto: produtoClass): void{
      this.produtos.push(produto);
   }
   remover(codigo: string): void{
      let pos = this.getPos(codigo);
      if(pos>-1)
         this.produtos.splice(pos,1);
   }
   obterTodos = ():Array<produtoClass> => this.produtos;
}
