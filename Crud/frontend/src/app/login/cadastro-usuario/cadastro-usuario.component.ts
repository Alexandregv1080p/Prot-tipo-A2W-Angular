import { Router } from '@angular/router';
import { Usuario } from './../users.module';
import { LogServService } from './../log-serv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

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

  public formLogin !: FormGroup
  constructor(private logServ: LogServService, private router: Router,private formBuilder : FormBuilder) { }


  ngOnInit(): void {
    
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
