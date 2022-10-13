import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CadastrarClienteComponent } from './components/createCliente/cadastrar-cliente/cadastrar-cliente.component';
import { ModulosComponent } from './views/modulos/modulos.component';
import { CreateModuloComponent } from './components/create-modulo/cadastrar-modulo/create-modulo.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './login/cadastro-usuario/cadastro-usuario.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [{
  path:"",
  component: HomeComponent,
  canActivate: [AuthGuard]
},{
  path:"cliente",
  component: ClienteComponent,
  canActivate: [AuthGuard]
},{
  path:"perfil",
  component: PerfilComponent,
  canActivate: [AuthGuard]
},{
  path:"createCliente/cadastrar-cliente",
  component:CadastrarClienteComponent,
  canActivate: [AuthGuard]
},{
  path:"modulos",
  component:ModulosComponent,
  canActivate: [AuthGuard]
},{
  path:"create-modulo/cadastrar-modulo",
  component: CreateModuloComponent,
  canActivate: [AuthGuard]
},{
  path:"login",
  component: LoginComponent
},{
  path:"cadastro-usuario",
  component: CadastroUsuarioComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
