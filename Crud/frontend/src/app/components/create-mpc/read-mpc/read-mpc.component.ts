import { Router } from '@angular/router';
import { Modcliente } from './../mpc.model';
import { Component, OnInit } from '@angular/core';
import { MpcSevService } from '../mpc-sev.service';
import { Modulo } from '../../create-modulo/module.model';
import { Cliente } from '../../createCliente/cliente.model';

@Component({
  selector: 'app-read-mpc',
  templateUrl: './read-mpc.component.html',
  styleUrls: ['./read-mpc.component.css']
})
export class ReadMpcComponent implements OnInit {

  constructor(private mpcService: MpcSevService,private router:Router) { }

  mpc: Modcliente[]
  modulos: Modulo[]
  clientes: Cliente[]
  displayedColumns = ['id','clientes','modulos','status','actions']
  name:any
  ngOnInit(): void {
    this.mpcService.read().subscribe(mpc =>{
      this.mpc = mpc
      console.log(mpc)
    })
    
  }
  navigateToMpcUpdate(id:number){
    this.router.navigate([`modulos-por-cliente/update-mpc/${id}`])
  }
  navigateToMpcDelete(id:number){
    this.router.navigate([`modulos-por-cliente/delete-mpc/${id}`])
  }
  search(){
    if(this.name == ""){
    this.ngOnInit()
  }else{
    this.clientes = this.clientes.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
    })
  }
}
}
