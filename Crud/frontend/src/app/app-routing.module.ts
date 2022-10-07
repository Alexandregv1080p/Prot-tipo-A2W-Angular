import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CadastrarClienteComponent } from './components/createCliente/cadastrar-cliente/cadastrar-cliente.component';
import { ModulosComponent } from './views/modulos/modulos.component';
import { CreateModuloComponent } from './components/create-modulo/cadastrar-modulo/create-modulo.component';

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
  path:"createCliente/cadastrar-cliente",
  component:CadastrarClienteComponent
},{
  path:"modulos",
  component:ModulosComponent
},{
  path:"create-modulo/cadastrar-modulo",
  component: CreateModuloComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
