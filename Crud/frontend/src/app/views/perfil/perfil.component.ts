import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nome = sessionStorage.getItem('nome')
  email = sessionStorage.getItem('email')
  senha = sessionStorage.getItem('senha')

  usuario: any
 

  constructor(private perfilService:PerfilService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.nome)
    console.log(this.email)
    console.log(this.senha)
  }
  updateCliente(){
    this.perfilService.update(this.usuario).subscribe(()=>{
      this.perfilService.showMensage('Usuario atualizado com sucesso')
      this.router.navigate(["cliente"])
    })
  }

}
