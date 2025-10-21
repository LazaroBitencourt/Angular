import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral',
  standalone: false,
  templateUrl: './lateral.html',
  styleUrl: './lateral.css'
})
export class Lateral implements OnInit {
@Input() pagina: string = "indefinida"
acesso: string ="";
constructor(){}
addZeroEsquerda = (x:number)=>(x>9)? `${x}` : `0${x}`;

 formataData(d: Date): string {
    var dataStr = "";
    dataStr += this.addZeroEsquerda(d.getDate())+"/"+
               this.addZeroEsquerda(d.getMonth()+1)+"/"+
               d.getFullYear()+" "+
               this.addZeroEsquerda(d.getHours())+":"+
               this.addZeroEsquerda(d.getMinutes())+":"+
               this.addZeroEsquerda(d.getSeconds());
    return dataStr;
  }

  ngOnInit(): void {
    let d: Date = new Date();
    this.acesso = this.formataData(d);
  }

}
