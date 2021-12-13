import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ConsultaProdutosIndicadoresComponent } from './consulta-produtos-indicadores/consulta-produtos-indicadores.component';
import { HomeComponent } from './home/home.component';
import { PactuacaoComponent } from './pactuacao/pactuacao.component';
import { ProdutosUpdateComponent } from './produtos-update/produtos-update.component';
//import { ProdutosIndicadoresComponent } from './produtosIndicadores/produtosIndicadores.component';  tirei o componente Produtos indicadores e coloquei como modal dentro de consultaProdutos
import { TutorialComponent } from './tutorial/tutorial.component';


// configurando uma rota (endereço) para acessar cada componente
const routes: Routes = [
  {path: '', component: HomeComponent}, //coloco VAZIO pq mostra que é pra carregar qdo o site abrir
 // {path: 'cadastro-produtos-indicadores', component : ProdutosIndicadoresComponent },
  {path: 'pactuacao', component : PactuacaoComponent},
  {path: 'avaliacao', component : AvaliacaoComponent },
  {path: 'tutorial', component: TutorialComponent},
  {path: 'consulta-produtos-indicadores', component: ConsultaProdutosIndicadoresComponent},
  {path: 'produtos-update/:id', component: ProdutosUpdateComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
