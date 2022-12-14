import { ClienteComponent } from './components/createCliente/cliente/cliente.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component'
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PerfilComponent } from './views/perfil/perfil.component';
import { ModulosComponent } from './views/modulos/modulos.component';
import { CadastrarClienteComponent } from './components/createCliente/cadastrar-cliente/cadastrar-cliente.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateModuloComponent } from './components/create-modulo/cadastrar-modulo/create-modulo.component';
import {HttpClientModule} from '@angular/common/http';
import { ReadModuloComponent } from './components/create-modulo/read-modulo/read-modulo.component';
import { ForDirective } from './directives/for.directive';
import { ReadClienteComponent } from './components/createCliente/read-cliente/read-cliente.component';
import { CadastrClienteTabelaComponent } from './components/createCliente/cadastr-cliente-tabela/cadastr-cliente-tabela.component';
import { TabelaCadastroModuloComponent } from './components/create-modulo/tabela-cadastro-modulo/tabela-cadastro-modulo.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './login/cadastro-usuario/cadastro-usuario.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ModuloPorClienteComponent } from './views/modulo-por-cliente/modulo-por-cliente.component';
import { CadastroMpcComponent } from './components/create-mpc/cadastro-mpc/cadastro-mpc.component';
import { McpComponent } from './views/home/mcp/mcp.component';
import { YupdateclienteComponent } from './components/createCliente/yupdatecliente/yupdatecliente.component';
import { DeleteClienteComponent } from './components/createCliente/delete-cliente/delete-cliente.component';
import { UpdateModuloComponent } from './components/create-modulo/update-modulo/update-modulo.component';
import { DelteModuloComponent } from './components/create-modulo/delte-modulo/delte-modulo.component';
import { ReadMpcComponent } from './components/create-mpc/read-mpc/read-mpc.component';
import { UpdateMpcComponent } from './components/create-mpc/update-mpc/update-mpc.component';
import { DeleteMpcComponent } from './components/create-mpc/delete-mpc/delete-mpc.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ClienteComponent,
    PerfilComponent,
    ModulosComponent,
    CadastrarClienteComponent,
    CreateModuloComponent,
    ReadModuloComponent,
    ForDirective,
    ReadClienteComponent,
    CadastrClienteTabelaComponent,
    TabelaCadastroModuloComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    ModuloPorClienteComponent,
    CadastroMpcComponent,
    McpComponent,
    YupdateclienteComponent,
    DeleteClienteComponent,
    UpdateModuloComponent,
    DelteModuloComponent,
    ReadMpcComponent,
    UpdateMpcComponent,
    DeleteMpcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
