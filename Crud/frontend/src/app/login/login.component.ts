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

  constructor(private router: Router,
    private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
        userName:['',Validators.required],
        passWord:['',Validators.required]
    })
  }
  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
}
