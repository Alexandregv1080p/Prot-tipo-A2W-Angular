import { map } from 'rxjs/operators';
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

  loginForm:any = FormGroup

  usuarios : any 

  ususarioAutenticado : boolean

  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authService: LogServService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.authService.getUser().subscribe((data)=>{
      this.usuarios = data
      console.log(this.usuarios)
    }) 
    this.loginForm = this.formBuild.group({
      email:['',Validators.required],
      senha:['',Validators.required]
  })
  }
  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
  irParaHome(){
    if(this.ususarioAutenticado == true){
      this.router.navigate([""])
    }  
  }

  loginProces(usuarios: any){
      for(let a of this.usuarios){
        if(usuarios.email == a.email && usuarios.senha == a.senha){
          this.authService.showMensage('Usuario logado!')
          localStorage.setItem("Está logado", "true")
          console.log(a)
          this.router.navigate([""]) 
          break
          
        }
        else{
          this.authService.showMensage('Usuario inválido')
          localStorage.clear();
          console.log(usuarios.email === a.email ? 'true' : 'false' )  
          
        }
      }
    }

  }
