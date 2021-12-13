import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Model/product.model';

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {

  product!: Product; 
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') //pegar id na rota, se quiser q seja assim
    if(id != null){
      this.productService.readById(id).subscribe(product => {
        this.product = product
     } );
    }
    
  }

  updateProduct(): void{ 
    this.productService.update(this.product).subscribe(() => this.productService.showMessage('Produto atualizado com sucesso'))
    this.router.navigate(['/consulta-produtos-indicadores'])
  }

  cancel(): void{
    this.router.navigate(['/consulta-produtos-indicadores'])

  }

}
