import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './users.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServService {

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  loginForm: FormGroup

  baseUrl = "http://localhost:3001/usuarios"
  urlUsers = "http://localhost:3001/usuarios-logados"


  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
  })
  }
  create(urser:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl,urser)
  }
  getUser(){
    return this.http.get(this.baseUrl)
  }
  logarUser(urser:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlUsers,urser)
  }

}
