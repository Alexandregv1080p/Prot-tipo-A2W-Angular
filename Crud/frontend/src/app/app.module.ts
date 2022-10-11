import { NgModule } from '@angular/core';
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
import { ClienteComponent } from './views/cliente/cliente.component';
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
import { LoginComponent } from './login/login.component'



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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
