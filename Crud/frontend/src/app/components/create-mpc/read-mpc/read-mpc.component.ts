import { Router } from '@angular/router';
import { Mpc } from './../mpc.model';
import { Component, OnInit } from '@angular/core';
import { MpcSevService } from '../mpc-sev.service';

@Component({
  selector: 'app-read-mpc',
  templateUrl: './read-mpc.component.html',
  styleUrls: ['./read-mpc.component.css']
})
export class ReadMpcComponent implements OnInit {

  constructor(private mpcService: MpcSevService,private router:Router) { }

  mpc: Mpc[]
  displayedColumns = ['id','nomeCliente','nomeModulo','status','action']

  ngOnInit(): void {
    this.mpcService.read().subscribe(mpc =>{
      this.mpc = mpc
      console.log(mpc)
    })
  }
  navigateToMpcUpdate(id:number){
    this.router.navigate([`modulos-por-cliente/update-mpc/${id}`])
  }
  navigateToMpcDelete(id:number){
    this.router.navigate([`modulos-por-cliente/delete-mpc/${id}`])
  }

}
