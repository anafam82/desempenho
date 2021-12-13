import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  baseUrl = "http://localhost:3000/produtos"
  product: any;

   constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: "top"

      })
    }

    //função POST
    create(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product)
      
      
    }

    read(): Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl)

    }

    readById(id: string): Observable <Product>{ //acresceite ou NULL pq qdo chamava a função update estava dando erro 
      const url =`${this.baseUrl}/${id}`
      return this.http.get<Product>(url)

    }
    
    update(product: Product): Observable<Product>{
      const url =`${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url, product)    
    
    
    }


    delete(id: number): Observable<Product>{
      const url =`${this.baseUrl}/${id}`; //aqui ele pega a url e passa o id
      return this.http.delete<Product>(url);
    }
}
