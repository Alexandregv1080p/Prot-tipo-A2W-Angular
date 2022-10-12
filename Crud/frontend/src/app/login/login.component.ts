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

  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authService: LogServService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = this.formBuild.group({
      userName:['',Validators.required],
      passWord:['',Validators.required]
  })  
  }

  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
  loginProces():void{
    this.http.post(this.baseUrl,this.loginForm.getRawValue())
    .subscribe(res =>
      console.log(res))
      this.router.navigate(["cadastro-usuario"])
    this.authService.showMensage('Usuario logado!')
  }
  
}


