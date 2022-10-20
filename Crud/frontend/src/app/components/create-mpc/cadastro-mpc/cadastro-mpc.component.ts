import { map, tap } from 'rxjs/operators';
import { Cliente } from './../../createCliente/cliente.model';
import { Modulo } from './../../create-modulo/module.model';
import { Modcliente } from './../mpc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MpcSevService } from '../mpc-sev.service';
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

    modulos!: Modulo[]

    clientes!: Cliente []

    
  ngOnInit(): void {
    
  }
  modcliente: Modcliente = {
    clientes:'Alvaro',
    modulos: 'Módulo 1',
    quantidadeCliente: null,
  }
  
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }
  adicionarMod() : void {
    this.mpcService.readClientes().subscribe(cliente=>{
      this.clientes = cliente
      console.log(cliente)
      this.mpcService.readModulos().subscribe(modulos =>{
        this.modulos = modulos
      })
    })
    this.mpcService.read().subscribe(()=>{
      this.mpcService.create(this.modcliente).subscribe(()=>{
        this.mpcService.showMensage("Cadastrado com sucesso!!")
      })
    })
 }
}
