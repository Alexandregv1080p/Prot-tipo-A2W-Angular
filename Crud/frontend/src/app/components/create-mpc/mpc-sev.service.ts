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

  baseUrl =   "http://localhost:3001/mpc"
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
  create(cliente:Modcliente):Observable<Modcliente>{
    return this.http.post<Modcliente>(this.baseUrl,cliente)
  }
  read(): Observable<any[]> {
    return this.http.get<Modcliente[]>(this.baseUrl)
  }
  readModulos(): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(this.modulosUrl)
  }
  readClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
  }
  readById(id: string):Observable<Modcliente>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Modcliente>(url)
  }
  readByIdCliente(id: string):Observable<any>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<any>(this.clientesUrl)
  }
  update(mpc: Modcliente):Observable<Modcliente>{
    let url = `${this.baseUrl}/${mpc.id}`
    return this.http.put<Modcliente>(url,mpc)
  }
}
