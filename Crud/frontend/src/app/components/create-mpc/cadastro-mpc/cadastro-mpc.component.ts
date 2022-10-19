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

    modulos!: Modulo[]

    clientes!: Cliente []

    modcliente: Modcliente = {
      clientes:{},
      modulos: {},
      quantidadeCliente: '',
      id:null
    }

  selected!: string;


  ngOnInit(): void {
    this.mpcService.readClientes().subscribe(cliente=>{
      this.clientes = cliente
      console.log(this.clientes)
    })
    this.moduloService.read().subscribe(modulos => {
      this.modulos = modulos
      console.log(this.modulos)
    })
    
  }
  
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }
  adicionarMod() : void {
    this.mpcService.read().subscribe(res =>{
       if(!res.find((item:any)  => item.modcliente.name == this.modcliente.clientes &&  item.modcliente.name == this.modcliente.modulos)){
         this.mpcService.create(this.modcliente).subscribe(() => {
           this.mpcService.showMensage('Módulo registrado com sucesso!')
           this.router.navigate(["modulos-por-cliente"])
         });
       }
     });
 }
}
