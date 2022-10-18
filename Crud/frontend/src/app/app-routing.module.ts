import { UpdateMpcComponent } from './components/create-mpc/update-mpc/update-mpc.component';
import { DeleteMpcComponent } from './components/create-mpc/delete-mpc/delete-mpc.component';
import { UpdateModuloComponent } from './components/create-modulo/update-modulo/update-modulo.component';
import { DelteModuloComponent } from './components/create-modulo/delte-modulo/delte-modulo.component';
import { DeleteClienteComponent } from './components/createCliente/delete-cliente/delete-cliente.component';
import { ClienteComponent } from './components/createCliente/cliente/cliente.component';
import { CadastroMpcComponent } from './components/create-mpc/cadastro-mpc/cadastro-mpc.component';
import { ModuloPorClienteComponent } from './views/modulo-por-cliente/modulo-por-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CadastrarClienteComponent } from './components/createCliente/cadastrar-cliente/cadastrar-cliente.component';
import { ModulosComponent } from './views/modulos/modulos.component';
import { CreateModuloComponent } from './components/create-modulo/cadastrar-modulo/create-modulo.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './login/cadastro-usuario/cadastro-usuario.component';
import { AuthGuard } from './login/auth.guard';
import { YupdateclienteComponent } from './components/createCliente/yupdatecliente/yupdatecliente.component';

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
  path:"cliente/cadastrar-cliente",
  component:CadastrarClienteComponent,
  canActivate: [AuthGuard]
},
{
  path:"modulos",
  component:ModulosComponent,
  canActivate: [AuthGuard]
},{
  path:"create-modulo/cadastrar-modulo",
  component: CreateModuloComponent,
  canActivate: [AuthGuard]
},{
  path:"modulos-por-cliente",
  component: ModuloPorClienteComponent,
  canActivate: [AuthGuard]
},
{
  path:"cadastro-mpc",
  component: CadastroMpcComponent,
  canActivate: [AuthGuard]
},
{
  path:"login",
  component: LoginComponent
},{
  path:"cadastro-usuario",
  component: CadastroUsuarioComponent 
},{
  path:"cliente/yupdatecliente/:id",
  component: YupdateclienteComponent
},{
  path:"cliente/deletecliente/:id",
  component: DeleteClienteComponent
},{
  path:"create-modulo/update-modulo/:id",
  component: UpdateModuloComponent
},{
  path:"create-modulo/delete-modulo/:id",
  component:  DelteModuloComponent
},{
  path:"modulos-por-cliente/delete-mpc/:id",
  component: DeleteMpcComponent
},{
  path:"modulos-por-cliente/update-mpc/:id",
  component: UpdateMpcComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
