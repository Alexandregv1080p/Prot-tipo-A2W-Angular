import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  irParaCadastro(){
    this.router.navigate(["cadastro-usuario"])
  }
}
