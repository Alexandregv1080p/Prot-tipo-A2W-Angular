import { Usuario } from './users.module';
import { HttpClient } from '@angular/common/http';
import { LogServService } from './log-serv.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  baseUrl = "http://localhost:3001/usuarios"

  usuarios : Usuario[]

  ususarioAutenticado : boolean

  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authService: LogServService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.authService.getUser().subscribe((usuarios)=>{
      this.usuarios = usuarios
      console.log(usuarios)
    }) 
    this.loginForm = this.formBuild.group({
      name:['',Validators.required],
      senha:['',Validators.required]
  })
    this.ususarioAutenticado = false
  }
  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
  loginProces(usuarios: any):void{
    if(usuarios.name){
      this.usuarios.forEach((item:any)=>{
        if(item.name === usuarios.name && item.senha === usuarios.senha){
          this.authService.showMensage('Usuario logado!')
          this.ususarioAutenticado = true
          this.router.navigate([""])
        }
        else{
          this.authService.showMensage('Usuario inválido')
        }
      })
    }
    
  }
  
  
}


