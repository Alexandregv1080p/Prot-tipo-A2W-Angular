import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-por-cliente',
  templateUrl: './modulo-por-cliente.component.html',
  styleUrls: ['./modulo-por-cliente.component.css']
})
export class ModuloPorClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateMpc(){
    this.router.navigate(['cadastro-mpc'])
  }
}
