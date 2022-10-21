import { Usuario } from './../../login/users.module';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id = sessionStorage.getItem('id')
  
  

  usuario: Usuario={
    name: '',
    email:'',
    senha:'',
    confirmSenha:''
  }
 

  constructor(private perfilService:PerfilService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.perfilService.read().subscribe(usuario=>{
      this.usuario = usuario
    })
    console.log(this.usuario)
    
  }
  updateUsuario(){
    
    this.perfilService.update(this.usuario).subscribe(()=>{
      this.perfilService.showMensage('Usuario atualizado com sucesso')
      
    })
  }

}
