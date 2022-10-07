import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuloLogService } from '../modulo-log.service';

@Component({
  selector: 'app-create-modulo',
  templateUrl: './create-modulo.component.html',
  styleUrls: ['./create-modulo.component.css']
})
export class CreateModuloComponent implements OnInit {

  constructor(private moduloService: ModuloLogService,private router: Router) { }

  ngOnInit(): void {
  }
  cadastrarModulo():void{
    this.moduloService.showMensage('Módulo cadastrado com sucesso')
    this.router.navigate(["modulos"])
  }
}
