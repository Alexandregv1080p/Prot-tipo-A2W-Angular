import { ActivatedRoute, Router } from '@angular/router';
import { Mpc } from './../mpc.model';
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

  constructor(private clienteService:ClienteLogService,private route:ActivatedRoute,private mpcService: MpcSevService,private router:Router,private moduloService: ModuloLogService) { }

  
  modulos: Modulo

  clientes:Cliente[]

  mpc : any

  ngOnInit(): void {
    this.mpcService.readClientes().subscribe((data)=>{
      this.clientes = data
      console.log(data)
    })
  }
  

  cadastrarMpc():void{
    this.mpcService.create(this.mpc).subscribe(()=>{
      this.mpcService.showMensage('Mpc cadastrado com sucesso')
      this.router.navigate(["mpc"])
      this.router.navigate(["modulos-por-cliente"])
    })
    
  }
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }
  loginProces(clientes: any){
    
  }
}
