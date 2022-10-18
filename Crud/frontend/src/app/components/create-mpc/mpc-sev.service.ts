import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Mpc } from './mpc.model';

@Injectable({
  providedIn: 'root'
})
export class MpcSevService {

  baseUrl =   "http://localhost:3001/mpc"


  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }
  showMensage(msg: string):void{
    this.snackBar.open(msg,'Fechar',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  create(cliente:Mpc):Observable<Mpc>{
    return this.http.post<Mpc>(this.baseUrl,cliente)
  }
  read(): Observable<Mpc[]> {
    return this.http.get<Mpc[]>(this.baseUrl)
  }
  readById(id: string):Observable<Mpc>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Mpc>(url)
  }
  update(cliente: Mpc):Observable<Mpc>{
    let url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Mpc>(url,cliente)
  }
  delete(id: number):Observable<Mpc>{
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Mpc>(url)
  }
}
