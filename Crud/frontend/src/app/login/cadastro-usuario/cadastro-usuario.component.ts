import { Router } from '@angular/router';
import { Usuario } from './../users.module';
import { LogServService } from './../log-serv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavServiceService } from 'src/app/components/template/nav-service.service';
import { HeaderServiceService } from 'src/app/components/template/header-service.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroForm : any = FormBuilder

  users:Usuario = {
    name:'',
    senha:'',
    confirmSenha:'',
    email:''
  }

  public formRegister !: FormGroup
  constructor(private logServ: LogServService
    , private router: Router
    ,private formBuild : FormBuilder,
    public nav: NavServiceService,
    public head: HeaderServiceService
    ) { }


  ngOnInit(): void {
    this.nav.hide();
    this.head.hide();
    this.cadastroForm = this.formBuild.group({
      name:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      confirmSenha:['',Validators.required]
  })
  }

  cadastrarCliente():void{
    console.log(this.cadastroForm)
    this.logServ.create(this.cadastroForm.getRawValue()).subscribe(()=>{
      this.logServ.showMensage('Usuário cadastrado com sucesso')
      this.router.navigate(["login"])
    })
    JSON.stringify(this.cadastroForm.getRawValue())
  }
  cancel():void{
    this.router.navigate(["login"])
  }
  hide = true
}
