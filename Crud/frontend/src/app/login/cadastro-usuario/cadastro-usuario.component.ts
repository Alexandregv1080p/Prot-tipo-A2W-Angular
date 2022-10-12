import { Router } from '@angular/router';
import { Usuario } from './../users.module';
import { LogServService } from './../log-serv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  users:Usuario = {
    name:'',
    senha:'',
    email:''
  }

  public formRegister !: FormGroup
  constructor(private logServ: LogServService, private router: Router,private formBuild : FormBuilder) { }


  ngOnInit(): void {
    this.formRegister = this.formBuild.group({
      userName:['',Validators.required],
      passWord:['',Validators.required],
      email:['',Validators.required]
  })
  }

  cadastrarCliente():void{
    this.logServ.create(this.users).subscribe(()=>{
      this.logServ.showMensage('Usuário cadastrado com sucesso')
      this.router.navigate(["login"])
    })
    
  }
  cancel():void{
    this.router.navigate(["login"])
  }
  
}
