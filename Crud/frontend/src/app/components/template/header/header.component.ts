import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogServService } from 'src/app/login/log-serv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu : boolean = false

  constructor(private http: HttpClient,public logServ: LogServService,private router: Router) { }

  ngOnInit(): void{
    this.logServ.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }
  logout(){
    localStorage.clear();
    this.logServ.logout()
    this.router.navigate(["login"])
  }
  

}
