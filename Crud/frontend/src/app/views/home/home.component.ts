import { Component, OnInit } from '@angular/core';
import { MpcSevService } from 'src/app/components/create-mpc/mpc-sev.service';
import { Modcliente } from 'src/app/components/create-mpc/mpc.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  modcliente!: Modcliente[]

  modcliente2: Modcliente = {
    clientes: {},
    modulos: {},
    quantidadeCliente: 1,
    quantidadeModulo:1,
    status:false,
    data:'',
    id:null
  }
  
  displayedColumns = ['clientes', 'modulos', 'quantidadeCliente', 'quantidadeModulo','usuarios']

  pesquisa: string = ''
  constructor(private mpcService: MpcSevService) { }

  

  ngOnInit(): void {
    this.mpcService.read().subscribe(modcliente => {
      this.modcliente = modcliente
    })
  }

  Resultado(v1:number, v2:number) {
    let result:any
    
      if ( v1 < v2 ||  v1 == v2 || v1 > v2)
      {
        result = (v2 - v1)
        if(Math.sign(result) == -1){
          result = Math.abs(result)
        }
        return result
      }
  }
  menor(n1: number, n2: number) :number {
    if(n1<=n2)
      return 1
    else
      return 0
  }
}
