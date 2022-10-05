import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"cliente",
  component: ClienteComponent
},{
  path:"perfil",
  component: PerfilComponent
},{
  path:"cadastrar-cliete",
  component:CadastrarClienteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
