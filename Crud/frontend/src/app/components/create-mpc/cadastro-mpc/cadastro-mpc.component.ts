import { Router } from '@angular/router';
import { Mpc } from './../mpc.model';
import { Component, OnInit } from '@angular/core';
import { MpcSevService } from '../mpc-sev.service';

@Component({
  selector: 'app-cadastro-mpc',
  templateUrl: './cadastro-mpc.component.html',
  styleUrls: ['./cadastro-mpc.component.css']
})
export class CadastroMpcComponent implements OnInit {

  constructor(private mpcService: MpcSevService,private router:Router) { }

  mpc : Mpc = {
    nomeCliente: "",
    nomeModulo: '',
    quantidade: null,
    data:'',
    status: false,
    id: 1
  }
  ngOnInit(): void {

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
}
