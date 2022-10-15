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

  usuarios : any = []

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
  loginProces(){
    console.log(this.loginForm.getRawValue())
}

}
