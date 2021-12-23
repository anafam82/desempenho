import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Servidor } from '../Model/servidor.model';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  
  
  baseServidorUrl = "http://localhost:3000/servidor"
  servidor: any;

   constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: "top"

      })
    }

    //função POST
    create(servidor: Servidor): Observable<Servidor> {
      return this.http.post<Servidor>(this.baseServidorUrl, servidor)
      
      
    }

    read(): Observable<Servidor[]>{
      return this.http.get<Servidor[]>(this.baseServidorUrl)

    }

    readById(id: string): Observable <Servidor>{ //acresceite ou NULL pq qdo chamava a função update estava dando erro 
      const url =`${this.baseServidorUrl}/${id}`
      return this.http.get<Servidor>(url)

    }
    
    // update(servidor: Servidor): Observable<Servidor>{
    //   const url =`${this.baseServidorUrl}/${servidor.id}`
    //   return this.http.put<Servidor>(url, servidor)    
    
    
    // }


    delete(id: number): Observable<Servidor>{
      const url =`${this.baseServidorUrl}/${id}`; //aqui ele pega a url e passa o id
      return this.http.delete<Servidor>(url);
    }
}
