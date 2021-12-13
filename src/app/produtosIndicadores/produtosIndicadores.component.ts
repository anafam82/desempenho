//COMPONENTE PARA CRIAR PRODUTOS

import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-produtosIndicadores',
  templateUrl: './produtosIndicadores.component.html',
  styleUrls: ['./produtosIndicadores.component.css']
})
export class ProdutosIndicadoresComponent implements OnInit {

  product: Product = { //aqui coloquei o nome product pq criei o product.model. Mas era melhor ser o nome q esta no backend 'produtos'
    orgao: '',
    macroprocesso: '',
    processo: '',
    produtoPactuacao: '',
    indicador: '',
    formula: '',
    modalidade: '',
    fonte: ''
    
  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Cadastro Realizado')
      this.router.navigate(['/consulta-produtos-indicadores']) 
      

    })
    
   
  }

  cancel(): void{
    this.router.navigate(['']) // coloco o nome que foi dado no app-routing , q aqui foi '' para ir pra home, ou outra rota ai coloco / antes. MAS AQUI TEREI Q FAZER UM REFRESH DA PAGINA PARA PROXIMA INCLUSAO
  }

  

}
