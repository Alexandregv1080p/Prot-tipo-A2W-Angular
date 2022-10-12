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


  baseUrl = "http://localhost:3001/usuarios"

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
  

}
