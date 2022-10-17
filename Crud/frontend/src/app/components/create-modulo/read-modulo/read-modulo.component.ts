import { Router } from '@angular/router';
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

  displayedColumns = ['id','name','status','action']

  constructor(private moduloService : ModuloLogService,private router:Router) { }

  ngOnInit(): void {
    this.moduloService.read().subscribe(modulos =>{
      this.modulos = modulos
      console.log(modulos)
    })
  }
  navigateToModuloUpdate(id:number){
    this.router.navigate([`create-modulo/update-modulo/${id}`])
  }
  navigateToModuloDelete(id:number){
    this.router.navigate([`create-modulo/delete-modulo/${id}`])
  }

}
