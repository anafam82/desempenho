import { Product } from './../Model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pactuacao',
  templateUrl: './pactuacao.component.html',
  styleUrls: ['./pactuacao.component.css']
})
export class PactuacaoComponent implements OnInit {
  route: any;
  
  //product!: Product;

  
  products: Product[] = [] // coloquei outro array para inicializar a variavel, mesmo [] vazio. pq sem isso o valor era undefined
  
  product: Product = { //tive q declarar pq o modal esta no html e é chamado qdo abre a pagina... entao se nao declarar dá problema
    orgao: '',
    macroprocesso: '',
    processo: '',
    produtoPactuacao: '',
    indicador: '',
    formula: '',
    modalidade: '',
    fonte: ''
    
  }
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.obterProdutos()
    
  }

  obterProdutos(){
    this.productService.read().subscribe(products => {
      this.products = products}
      )
      
  }

}
