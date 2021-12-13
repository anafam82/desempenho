import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.model';
//import { HttpClient } from '@angular/common/http';
//import { subscribeOn } from 'rxjs';
//import {FormGroup, Validators} from '@angular/forms';
//import {FormControl} from '@angular/forms';
//import { resolve } from 'dns';
//import { rejects } from 'assert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consulta-produtos-indicadores',
  templateUrl: './consulta-produtos-indicadores.component.html',
  styleUrls: ['./consulta-produtos-indicadores.component.css']
})
export class ConsultaProdutosIndicadoresComponent implements OnInit {

  
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

  idDelete: number;
  router: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.obterProdutos()
    
  }

  obterProdutos(){
    this.productService.read().subscribe(products => {
      this.products = products}
      )
      
  }

  

  // createProduct(): void{
  //   this.productService.create(this.product).subscribe(() =>{
  //     this.productService.showMessage('Cadastro Realizado')
  //     this.router.navigate(['']) 
      
  //   })
   
  //}

  createProduct(): Promise<void>{ 

    let promise = new Promise<void>((resolve, reject) => {
      this.productService.create(this.product)
        .subscribe(
          result => {
            this.productService.showMessage('Cadastro Realizado')
            resolve();
          },
          reason => {
            reject(reason);
          }
        );
      }).finally(() => this.obterProdutos());

      return promise;
  }

  alterarProdutos(id:number): void {  //para fazer refrencia da função no html. Ainda nao chamei no service
    console.log(id)
    this.productService.readById(id.toString()).subscribe(product => {  //agora chamo a service
      this.product = product
   } 
   );
  }

  updateProduct(): Promise<void>{ 

    let promise = new Promise<void>((resolve, reject) => {
      this.productService.update(this.product)
        .subscribe(
          result => {
            this.productService.showMessage('Produto atualizado com sucesso')
            resolve();
          },
          reason => {
            reject(reason);
          }
        );
      }).finally(() => this.obterProdutos());

      return promise;
  }
    

 
  pegarId(id:number): void {  
    console.log(id)
    this.idDelete = id;
   
  }

  deletarProduto(id: number): Promise<void> {

    console.log(id)

          let promise = new Promise<void>((resolve, reject) => {
            this.productService.delete(id).subscribe(
              result => {
                
                resolve();

              }, reason => {
                    reject(reason);
                }

            );

          }).finally(()=>  this.productService.showMessage('Produto excluído com sucesso')).then(() => this.obterProdutos());
          return promise;
        }
  
}


