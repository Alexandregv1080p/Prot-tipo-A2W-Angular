import { ActivatedRoute, Router } from '@angular/router';
import { Modcliente } from './../mpc.model';
import { MpcSevService } from './../mpc-sev.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../createCliente/cliente.model';
import { Modulo } from '../../create-modulo/tabela-cadastro-modulo/tabela-cadastro-modulo-datasource';
import { ModuloLogService } from '../../create-modulo/modulo-log.service';

@Component({
  selector: 'app-update-mpc',
  templateUrl: './update-mpc.component.html',
  styleUrls: ['./update-mpc.component.css']
})
export class UpdateMpcComponent implements OnInit {

  modulos!: Modulo[]

    clientes!: Cliente []

    modcliente: Modcliente
    

  constructor(private mpcService: MpcSevService,private route:ActivatedRoute, private router: Router,private moduloService:ModuloLogService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.mpcService.readById(id).subscribe(mpc=>{
      this.modcliente = mpc
      console.log(this.modcliente)
    })
    
  }
  updateMpc(){
    this.mpcService.update(this.modcliente).subscribe(()=>{
      this.mpcService.showMensage('MPC atualizado com sucesso')
      this.router.navigate(["modulos-por-cliente"])
    })
  }
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }

}
