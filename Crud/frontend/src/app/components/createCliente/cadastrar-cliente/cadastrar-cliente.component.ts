import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteLogService } from '../cliente-log.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  constructor(private router: Router, private cadastroCliente: ClienteLogService) { }

  ngOnInit(): void {
    
  }
  cadastrarCliente():void{
    this.cadastroCliente.showMensage('Cliente cadastrado com sucesso')
    this.router.navigate(["cliente"])
  }
  
}
