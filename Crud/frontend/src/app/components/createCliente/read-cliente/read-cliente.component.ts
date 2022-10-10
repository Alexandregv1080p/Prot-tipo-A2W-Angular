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

  constructor(private clienteService: ClienteLogService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes
      console.log(clientes)
    })
  }

}
