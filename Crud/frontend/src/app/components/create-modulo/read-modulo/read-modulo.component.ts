import { Component, OnInit } from '@angular/core';
import { Modulo } from '../module.model';
import { ModuloLogService } from '../modulo-log.service';

@Component({
  selector: 'app-read-modulo',
  templateUrl: './read-modulo.component.html',
  styleUrls: ['./read-modulo.component.css']
})
export class ReadModuloComponent implements OnInit {

  modulos: Modulo[] 

  constructor(private moduloService : ModuloLogService) { }

  ngOnInit(): void {
    this.moduloService.read().subscribe(modulos =>{
      this.modulos = modulos
      console.log(modulos)
    })
  }

}
