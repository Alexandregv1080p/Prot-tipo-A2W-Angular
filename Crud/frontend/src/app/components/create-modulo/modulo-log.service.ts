import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Modulo } from './module.model';


@Injectable({
  providedIn: 'root'
})
export class ModuloLogService {


  baseUrl = "http://localhost:3001/modulo"  

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
  read(): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(this.baseUrl)
  }
}
