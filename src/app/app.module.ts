import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
//import { ProdutosIndicadoresComponent } from './produtosIndicadores/produtosIndicadores.component';
import { PactuacaoComponent } from './pactuacao/pactuacao.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';



//importando classes da biblioteca de mapeamento de rotas
//import {Routes, RouterModule} from '@angular/router'; Essa rota está declarada em outra parte
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ConsultaProdutosIndicadoresComponent } from './consulta-produtos-indicadores/consulta-produtos-indicadores.component';

//importando a classe de configuração do módulo para PAGINAÇÃO de dados
import {NgxPaginationModule} from 'ngx-pagination';

//imporando o modulo que fará ligação com o banco
import {HttpClientModule} from '@angular/common/http';

//importações para formulário
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProdutosUpdateComponent } from './produtos-update/produtos-update.component';





@NgModule({
  declarations: [										
    AppComponent,
      HeaderComponent,
      FooterComponent,
     // ProdutosIndicadoresComponent,
      PactuacaoComponent,
      AvaliacaoComponent,
      HomeComponent,
      TutorialComponent,
      ConsultaProdutosIndicadoresComponent,
      ProdutosUpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    //RouterModule.forRoot(routes),
    NgxPaginationModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
    


  ],
  providers: [], // se eu quiser criar um service que seja usado fora do modulo eu coloco aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
