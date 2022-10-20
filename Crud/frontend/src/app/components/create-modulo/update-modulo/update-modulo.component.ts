import { ModuloLogService } from './../modulo-log.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modulo } from './../tabela-cadastro-modulo/tabela-cadastro-modulo-datasource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-modulo',
  templateUrl: './update-modulo.component.html',
  styleUrls: ['./update-modulo.component.css']
})
export class UpdateModuloComponent implements OnInit {

  modulos: Modulo

  constructor(private route: ActivatedRoute,private moduloService: ModuloLogService,private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.moduloService.readById(id).subscribe(modulos => {
      this.modulos = modulos
    })
  }
  updateModulo(){
    this.moduloService.update(this.modulos).subscribe(()=>{
      this.moduloService.showMensage('Modulo atualizado com sucesso')
      this.router.navigate(["modulos"])
    })
  }
  cancel():void{
    this.router.navigate(["modulos"])
  }

}
