import { Cliente } from '../cliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteLogService } from '../cliente-log.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private router:Router,private clienteService: ClienteLogService) { }

  clientes: Cliente[]
  displayedColumns = ['id','name','status','action']

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes
      console.log(clientes)
    })
  }
  navigateToClientCreate(){
    this.router.navigate(['cliente/cadastrar-cliente'])
  }
  
}
