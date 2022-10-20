import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Modulo } from './module.model';


@Injectable({
  providedIn: 'root'
})
export class ModuloLogService {


  baseUrl = "http://localhost:3001/modulos"  

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
  create(modulo:Modulo):Observable<Modulo>{
    return this.http.post<Modulo>(this.baseUrl,modulo)
  }
  read(): Observable<any>  {
    return this.http.get<any>(this.baseUrl)
  }
  readById(id: string):Observable<Modulo>{
    let url = `${this.baseUrl}/${id}`
    return this.http.get<Modulo>(url)
  }
  update(cliente: Modulo):Observable<Modulo>{
    let url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Modulo>(url,cliente)
  }
  delete(id: number):Observable<Modulo>{
    let url = `${this.baseUrl}/${id}`
    return this.http.delete<Modulo>(url)
  }
}
