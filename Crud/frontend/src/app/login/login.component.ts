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
    private authService: LogServService) { }

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
  loginProces(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(res=>{
        if(res.sucess){
            console.log(res)
            alert(res.message)
        }
        else{
          alert()
        }
      })
    }
  }
  
}


