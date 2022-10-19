import { Component, OnInit } from '@angular/core';
import { MpcSevService } from 'src/app/components/create-mpc/mpc-sev.service';
import { Modcliente } from 'src/app/components/create-mpc/mpc.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns = ['cliente', 'modulo', 'quantidadeCliente', 'quantidadeModulo', 'usuarios', 'action']

  modcliente!: Modcliente[]

  modcliente2: Modcliente = {
    clientes: {},
    modulos: {},
    quantidadeCliente: '',
    id:null
  }

  pesquisa: string = ''
  constructor(private mpcService: MpcSevService) { }

  Resultado(v1:number, v2:number) {
    let result:any
    console.log(result)
      if ( v1 < v2 ||  v1 == v2 || v1 > v2)
      {
        result = (v2 - v1)
        return result
      }
  }
  menor(n1: number, n2: number) :number {
    if(n1<=n2)
      return 1
    else
      return 0
  }

  ngOnInit(): void {
    this.mpcService.read().subscribe(modcliente => {
      this.modcliente = modcliente
    })
  }

}
