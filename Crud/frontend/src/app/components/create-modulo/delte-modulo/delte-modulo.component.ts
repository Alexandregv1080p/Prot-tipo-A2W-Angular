import { ModuloLogService } from './../modulo-log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Modulo } from './../tabela-cadastro-modulo/tabela-cadastro-modulo-datasource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delte-modulo',
  templateUrl: './delte-modulo.component.html',
  styleUrls: ['./delte-modulo.component.css']
})
export class DelteModuloComponent implements OnInit {

  modulos: Modulo

  constructor(private route: ActivatedRoute, private moduloService: ModuloLogService,private router:Router) { }

  

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.moduloService.readById(id).subscribe(modulos=>{
      this.modulos = modulos
    })
  }
  deleteModulo(){
    this.moduloService.delete(this.modulos.id).subscribe(()=>{
      this.moduloService.showMensage("Modulo deletado com sucesso!")
      this.router.navigate(["modulos"])
    })
  }
  cancel():void{
    this.router.navigate(["modulos"])
  }
}
