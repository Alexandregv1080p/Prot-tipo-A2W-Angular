import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map} from 'rxjs/operators';

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
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      userName:['',Validators.required],
      passWord:['',Validators.required]
  })  
  }
  
  //onSubmit(){
  //  this.http.post('http://localhost:3001/usuarios', JSON.stringify(this.loginForm.value)).pipe(
  //      map(any => {any}),
  //      subscribe(dados => console.log(dados)
  //    ))
  //} 

  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
  
}


