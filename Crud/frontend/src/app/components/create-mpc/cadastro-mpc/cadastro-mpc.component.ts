import { Modcliente } from './../mpc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MpcSevService } from '../mpc-sev.service';
import { Cliente } from '../../createCliente/cliente.model';
import { Modulo } from '../../create-modulo/tabela-cadastro-modulo/tabela-cadastro-modulo-datasource';
import { ModuloLogService } from '../../create-modulo/modulo-log.service';
import { ClienteLogService } from '../../createCliente/cliente-log.service';

@Component({
  selector: 'app-cadastro-mpc',
  templateUrl: './cadastro-mpc.component.html',
  styleUrls: ['./cadastro-mpc.component.css']
})
export class CadastroMpcComponent implements OnInit {

  constructor(private clienteService:ClienteLogService
    ,private route:ActivatedRoute
    ,private mpcService: MpcSevService
    ,private router:Router
    ,private moduloService: ModuloLogService) { }

  
  modulos: Modulo[]

  clientes:Cliente[]

  modcliente: Modcliente = {
    cliente: {},
    modulo: {},
    quantidadeCliente: ''
  }

  ngOnInit(): void {
    this.mpcService.readClientes().subscribe((data)=>{
      this.clientes = data
    })
    this.moduloService.read().subscribe(modulo => {
      this.modulos = modulo
    })
  }
  
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }
  loginProces(clientes: any){
    
  }
}
