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
  senha1 = sessionStorage.getItem('senha')

  usuarios: Usuario
  confirmUserSenha:any
  

  constructor(private perfilService:PerfilService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = sessionStorage.getItem('id')
    this.perfilService.readById(id).subscribe(usuario=>{
      this.usuarios = usuario
      console.log(this.usuarios)
    })
  }

  update(){
    if(this.confirmUserSenha == this.senha1){
    this.perfilService.updateUsuario(this.usuarios).subscribe(()=>{
      this.perfilService.showMensage('Usuario atualizado com sucesso')
      this.router.navigate([""])
    })
    }else{
      this.perfilService.showMensage('Senha precisa ser igual')
    }
  }
  cancel(){
    this.router.navigate([""])
  }
  hide = true
}