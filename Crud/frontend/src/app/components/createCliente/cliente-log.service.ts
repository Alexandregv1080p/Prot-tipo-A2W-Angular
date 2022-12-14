import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Cliente } from './cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteLogService {

  baseUrl = "http://localhost:3001/clientes"

  constructor(
    private snackBar:MatSnackBar,
    private http:HttpClient
    ) { }

  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  readById(id: string):Observable<Cliente>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
  update(cliente: Cliente):Observable<Cliente>{
    let url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url,cliente)
  }
  delete(id: number):Observable<Cliente>{
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }
}
