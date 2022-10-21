import { LogServService } from './log-serv.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NavServiceService } from '../components/template/nav-service.service';
import { HeaderServiceService } from '../components/template/header-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup

  usuarios : any 

  usuarioLogado : any

  isAutenticado = false

  mostrarMenu: boolean = false

  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authService: LogServService,
    public nav: NavServiceService,
    public head: HeaderServiceService) { }

  ngOnInit(): void {
    this.initForm();
    this.nav.hide();
    this.head.hide();
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
  loginProces(usuarios: any){
      for(let a of this.usuarios){
        if(usuarios.email == a.email && usuarios.senha == a.senha){
          this.authService.showMensage('Usuario logado!')
          localStorage.setItem("Está logado", "true")
          sessionStorage.setItem("email",a.email)
          sessionStorage.setItem("nome",a.name)
          sessionStorage.setItem("senha",a.senha)
          sessionStorage.setItem("id",a.id)
          this.nav.show()
          this.head.show()
          this.router.navigate([""])
          break
        }
        else{
          this.authService.showMensage('Usuario inválido!')  
        }
      }
    }

  }
