import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/login/users.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar) { }
  baseUrl = "http://localhost:3001/usuarios"

  update(usuario: Usuario):Observable<Usuario>{
    let url = `${this.baseUrl}/${usuario.id}`
    return this.http.put<Usuario>(this.baseUrl,usuario)
  }
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  readById(id: string):Observable<Usuario>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Usuario>(this.baseUrl)
  }
  read(): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl)
  }
}
