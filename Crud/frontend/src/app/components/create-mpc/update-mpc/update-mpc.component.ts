import { ActivatedRoute, Router } from '@angular/router';
import { Modcliente } from './../mpc.model';
import { MpcSevService } from './../mpc-sev.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-mpc',
  templateUrl: './update-mpc.component.html',
  styleUrls: ['./update-mpc.component.css']
})
export class UpdateMpcComponent implements OnInit {

  mpc : Modcliente

  constructor(private mpcService: MpcSevService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }
  cancel():void{
    this.router.navigate(["modulos-por-cliente"])
  }

}
