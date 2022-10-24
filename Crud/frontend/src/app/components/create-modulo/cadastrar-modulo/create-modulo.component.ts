import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modulo } from '../module.model';
import { ModuloLogService } from '../modulo-log.service';

@Component({
  selector: 'app-create-modulo',
  templateUrl: './create-modulo.component.html',
  styleUrls: ['./create-modulo.component.css']
})
export class CreateModuloComponent implements OnInit {

  constructor(private moduloService: ModuloLogService,private router: Router) { }

  modulo:Modulo = {
    name:'',
    status: false,
    description:'',
    id:null
  }


  ngOnInit(): void {
  }
  cadastrarModulo():void{
    this.moduloService.create(this.modulo).subscribe(()=>{
      this.moduloService.showMensage('Módulo cadastrado com sucesso')
      this.router.navigate(["modulos"])
    })
    
  }
  
  cancel():void{
    this.router.navigate(["modulos"])
  }
}
