import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteLogService } from '../cliente-log.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-read-cliente',
  templateUrl: './read-cliente.component.html',
  styleUrls: ['./read-cliente.component.css']
})
export class ReadClienteComponent implements OnInit {

  clientes: Cliente[]
  displayedColumns = ['id','name','status','action']
  name : any


  constructor(private clienteService: ClienteLogService,private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes
      console.log(clientes)
    })
  }
  navigateToClientUpdate(id:number){
    this.router.navigate([`cliente/yupdatecliente/${id}`])
  }
  navigateToClientDelete(id:number){
    this.router.navigate([`cliente/deletecliente/${id}`])
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
