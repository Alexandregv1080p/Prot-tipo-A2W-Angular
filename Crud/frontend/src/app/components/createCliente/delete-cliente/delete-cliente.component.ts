import { Cliente } from './../cliente.model';
import { ClienteLogService } from './../cliente-log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {

  cliente : Cliente

  constructor(private route: ActivatedRoute, private clienteService: ClienteLogService,private router:Router) { }

  

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(cliente=>{
      this.cliente = cliente
    })
  }
  deleteCliente(){
    this.clienteService.delete(this.cliente.id).subscribe(()=>{
      this.clienteService.showMensage("Cliente deletado com sucesso!")
      this.router.navigate(["cliente"])
    })
  }
  cancel():void{
    this.router.navigate(["cliente"])
  }

}
