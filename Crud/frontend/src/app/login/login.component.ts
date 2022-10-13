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

  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authService: LogServService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = this.formBuild.group({
      name:['',Validators.required],
      senha:['',Validators.required]
  })
  }

  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
  loginProces():void{
    this.authService.showMensage('Usuario logado!')
    this.authService.getUser().subscribe((usuarios)=>{
      this.usuarios = usuarios
      console.log(usuarios)
    }) 
  }
  
}


