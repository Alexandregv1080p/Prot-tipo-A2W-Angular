import { Mpc } from './../mpc.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-mpc',
  templateUrl: './cadastro-mpc.component.html',
  styleUrls: ['./cadastro-mpc.component.css']
})
export class CadastroMpcComponent implements OnInit {

  constructor() { }

  mpc : Mpc = {
    nomeCliente: "José",
    nomeModulo: 'Módulo 1',
    quantidade: 2,
    data:'20-10-2022',
    status: true,
    id: 1
  }
  ngOnInit(): void {

  }

}
