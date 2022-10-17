import { ClienteLogService } from './../cliente-log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yupdatecliente',
  templateUrl: './yupdatecliente.component.html',
  styleUrls: ['./yupdatecliente.component.css']
})
export class YupdateclienteComponent implements OnInit {

  cliente: Cliente

  constructor(private route: ActivatedRoute,private router:Router,private clienteService: ClienteLogService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(cliente=>{
      this.cliente = cliente
    })
  }
  updateCliente(){
    this.clienteService.update(this.cliente).subscribe(()=>{
      this.clienteService.showMensage('Cliente atualizado com sucesso')
      this.router.navigate(["cliente"])
    })
  }
  cancel():void{
    this.router.navigate(["cliente"])
  }
}
