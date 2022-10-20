import { Modcliente } from './mpc.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Modulo } from '../create-modulo/module.model';
import { Cliente } from '../createCliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class MpcSevService {

  baseUrl =   "http://localhost:3001/modcliente"
  modulosUrl = "http://localhost:3001/modulos"
  clientesUrl = "http://localhost:3001/clientes"


  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  create(mpc:Modcliente):Observable<Modcliente>{
    return this.http.post<Modcliente>(this.baseUrl,mpc)
  }
  read(): Observable<Modcliente[]> {
    return this.http.get<Modcliente[]>(this.baseUrl)
  }
  readMpc(): Observable<Modcliente> {
    return this.http.get<Modcliente>(this.baseUrl)
  }
  readModulos(): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.modulosUrl)
  }
  readClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
  }
  delete(id: number):Observable<Modcliente>{
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Modcliente>(url)
  }
}
